import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { Applications } from "./applications";
import { Auth } from "./auth";
import { Classifications } from "./classifications";
import { CoverageParameters } from "./coverageparameters";
import { Files } from "./files";
import { Institutions } from "./institutions";
import { Policies } from "./policies";
import { Producers } from "./producers";
import { Products } from "./products";
import { Quotes } from "./quotes";
import { RiskParameters } from "./riskparameters";
import { Submissions } from "./submissions";
import { WelcomeAndHealthCheck } from "./welcomeandhealthcheck";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://sandbox.heraldapi.com",
	"https://production.heraldapi.com",
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

export function withSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}


export class SDK {
  public applications: Applications;
  public auth: Auth;
  public classifications: Classifications;
  public coverageParameters: CoverageParameters;
  public files: Files;
  public institutions: Institutions;
  public policies: Policies;
  public producers: Producers;
  public products: Products;
  public quotes: Quotes;
  public riskParameters: RiskParameters;
  public submissions: Submissions;
  public welcomeAndHealthCheck: WelcomeAndHealthCheck;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
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
      if (this._security) {
        this._securityClient = utils.createSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
    this.applications = new Applications(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.auth = new Auth(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.classifications = new Classifications(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.coverageParameters = new CoverageParameters(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.files = new Files(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.institutions = new Institutions(
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
    
    this.producers = new Producers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.products = new Products(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.quotes = new Quotes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.riskParameters = new RiskParameters(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.submissions = new Submissions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.welcomeAndHealthCheck = new WelcomeAndHealthCheck(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
