import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Changes } from "./changes";
import { DnsKeys } from "./dnskeys";
import { ManagedZoneOperations } from "./managedzoneoperations";
import { ManagedZones } from "./managedzones";
import { Policies } from "./policies";
import { Projects } from "./projects";
import { ResourceRecordSets } from "./resourcerecordsets";
import { ResponsePolicies } from "./responsepolicies";
import { ResponsePolicyRules } from "./responsepolicyrules";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://dns.googleapis.com/",
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

/* SDK Documentation: https://cloud.google.com/dns/docs*/
export class SDK {
  public changes: Changes;
  public dnsKeys: DnsKeys;
  public managedZoneOperations: ManagedZoneOperations;
  public managedZones: ManagedZones;
  public policies: Policies;
  public projects: Projects;
  public resourceRecordSets: ResourceRecordSets;
  public responsePolicies: ResponsePolicies;
  public responsePolicyRules: ResponsePolicyRules;

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
    
    this.changes = new Changes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dnsKeys = new DnsKeys(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.managedZoneOperations = new ManagedZoneOperations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.managedZones = new ManagedZones(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.policies = new Policies(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.projects = new Projects(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.resourceRecordSets = new ResourceRecordSets(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.responsePolicies = new ResponsePolicies(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.responsePolicyRules = new ResponsePolicyRules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
