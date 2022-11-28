import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Advertisers } from "./advertisers";
import { CombinedAudiences } from "./combinedaudiences";
import { CustomBiddingAlgorithms } from "./custombiddingalgorithms";
import { CustomLists } from "./customlists";
import { FirstAndThirdPartyAudiences } from "./firstandthirdpartyaudiences";
import { FloodlightGroups } from "./floodlightgroups";
import { GoogleAudiences } from "./googleaudiences";
import { GuaranteedOrders } from "./guaranteedorders";
import { InventorySourceGroups } from "./inventorysourcegroups";
import { InventorySources } from "./inventorysources";
import { Media } from "./media";
import { Partners } from "./partners";
import { Sdfdownloadtasks } from "./sdfdownloadtasks";
import { TargetingTypes } from "./targetingtypes";
import { Users } from "./users";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://displayvideo.googleapis.com/",
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

/* SDK Documentation: https://developers.google.com/display-video/*/
export class SDK {
  public advertisers: Advertisers;
  public combinedAudiences: CombinedAudiences;
  public customBiddingAlgorithms: CustomBiddingAlgorithms;
  public customLists: CustomLists;
  public firstAndThirdPartyAudiences: FirstAndThirdPartyAudiences;
  public floodlightGroups: FloodlightGroups;
  public googleAudiences: GoogleAudiences;
  public guaranteedOrders: GuaranteedOrders;
  public inventorySourceGroups: InventorySourceGroups;
  public inventorySources: InventorySources;
  public media: Media;
  public partners: Partners;
  public sdfdownloadtasks: Sdfdownloadtasks;
  public targetingTypes: TargetingTypes;
  public users: Users;

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
    
    this.advertisers = new Advertisers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.combinedAudiences = new CombinedAudiences(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customBiddingAlgorithms = new CustomBiddingAlgorithms(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customLists = new CustomLists(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.firstAndThirdPartyAudiences = new FirstAndThirdPartyAudiences(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.floodlightGroups = new FloodlightGroups(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.googleAudiences = new GoogleAudiences(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.guaranteedOrders = new GuaranteedOrders(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.inventorySourceGroups = new InventorySourceGroups(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.inventorySources = new InventorySources(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.media = new Media(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.partners = new Partners(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sdfdownloadtasks = new Sdfdownloadtasks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.targetingTypes = new TargetingTypes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.users = new Users(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
