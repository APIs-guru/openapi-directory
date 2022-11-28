import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { AccountInformationServiceAis } from "./accountinformationserviceais";
import { CommonServices } from "./commonservices";
import { ConfirmationOfFundsServicePiis } from "./confirmationoffundsservicepiis";
import { PaymentInitiationServicePis } from "./paymentinitiationservicepis";
import { SigningBasketsServiceSbs } from "./signingbasketsservicesbs";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.dev.openbankingproject.ch",
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

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}

/* SDK Documentation: https://github.com/openbankingproject-ch/obp-apis - Full Documentation of NextGen Access to Account Interoperability Framework
 * (General Introduction Paper, Operational Rules, Implementation Guidelines)
 * */
export class SDK {
  public accountInformationServiceAis: AccountInformationServiceAis;
  public commonServices: CommonServices;
  public confirmationOfFundsServicePiis: ConfirmationOfFundsServicePiis;
  public paymentInitiationServicePis: PaymentInitiationServicePis;
  public signingBasketsServiceSbs: SigningBasketsServiceSbs;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
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
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
    this.accountInformationServiceAis = new AccountInformationServiceAis(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.commonServices = new CommonServices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.confirmationOfFundsServicePiis = new ConfirmationOfFundsServicePiis(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentInitiationServicePis = new PaymentInitiationServicePis(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.signingBasketsServiceSbs = new SigningBasketsServiceSbs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
