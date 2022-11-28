import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { AttributeNamespaces } from "./attributenamespaces";
import { Attributes } from "./attributes";
import { Build } from "./build";
import { Configuration } from "./configuration";
import { Distributions } from "./distributions";
import { GeneralInformation } from "./generalinformation";
import { Groups } from "./groups";
import { IssueTrackers } from "./issuetrackers";
import { Person } from "./person";
import { PublishedBinaries } from "./publishedbinaries";
import { Request } from "./request";
import { Workers } from "./workers";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://opensuse.org/",
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

/* SDK Documentation: https://openbuildservice.org/help/ - Open Build Service - Documentation*/
export class SDK {
  public attributeNamespaces: AttributeNamespaces;
  public attributes: Attributes;
  public build: Build;
  public configuration: Configuration;
  public distributions: Distributions;
  public generalInformation: GeneralInformation;
  public groups: Groups;
  public issueTrackers: IssueTrackers;
  public person: Person;
  public publishedBinaries: PublishedBinaries;
  public request: Request;
  public workers: Workers;

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
    
    this.attributeNamespaces = new AttributeNamespaces(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.attributes = new Attributes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.build = new Build(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.configuration = new Configuration(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.distributions = new Distributions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.generalInformation = new GeneralInformation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.groups = new Groups(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.issueTrackers = new IssueTrackers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.person = new Person(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.publishedBinaries = new PublishedBinaries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.request = new Request(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.workers = new Workers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
