import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { BoundingBox } from "./boundingbox";
import { Create } from "./create";
import { Feature } from "./feature";
import { Info } from "./info";
import { Parts } from "./parts";
import { Point } from "./point";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://apps.gov.bc.ca/pub/geomark",
	"https://test.apps.gov.bc.ca/pub/geomark",
	"https://delivery.apps.gov.bc.ca/pub/geomark",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

/* SDK Documentation: https://www2.gov.bc.ca/gov/content?id=F6BAF45131954020BCFD2EBCC456F084 - Geomark Web Service*/
export class SDK {
  public boundingBox: BoundingBox;
  public create: Create;
  public feature: Feature;
  public info: Info;
  public parts: Parts;
  public point: Point;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
    this.boundingBox = new BoundingBox(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.create = new Create(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.feature = new Feature(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.info = new Info(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.parts = new Parts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.point = new Point(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
