import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";


import { Agents } from "./agents";
import { ApplicationDocuments } from "./applicationdocuments";
import { Applications } from "./applications";
import { BankAccounts } from "./bankaccounts";
import { CoveragePlans } from "./coverageplans";
import { Dependents } from "./dependents";
import { Employees } from "./employees";
import { GroupConfigurationContacts } from "./groupconfigurationcontacts";
import { GroupConfigurationLocations } from "./groupconfigurationlocations";
import { GroupCoverages } from "./groupcoverages";
import { Groups } from "./groups";
import { MemberElections } from "./memberelections";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://group-installation.noyo.com",
	"https://group-installation-sandbox.noyo.com",
] as const;

export function withServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.replaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function withClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {
  public agents: Agents;
  public applicationDocuments: ApplicationDocuments;
  public applications: Applications;
  public bankAccounts: BankAccounts;
  public coveragePlans: CoveragePlans;
  public dependents: Dependents;
  public employees: Employees;
  public groupConfigurationContacts: GroupConfigurationContacts;
  public groupConfigurationLocations: GroupConfigurationLocations;
  public groupCoverages: GroupCoverages;
  public groups: Groups;
  public memberElections: MemberElections;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (!this._serverURL) {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
    
    this.agents = new Agents(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.applicationDocuments = new ApplicationDocuments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.applications = new Applications(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bankAccounts = new BankAccounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.coveragePlans = new CoveragePlans(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dependents = new Dependents(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.employees = new Employees(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.groupConfigurationContacts = new GroupConfigurationContacts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.groupConfigurationLocations = new GroupConfigurationLocations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.groupCoverages = new GroupCoverages(
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
    
    this.memberElections = new MemberElections(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
  /**
   * ping - Ping Endpoint
   *
   * Returns a simple OK message with a 200 status code
  **/
  ping(
    config?: AxiosRequestConfig
  ): Promise<operations.PingResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ping";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
