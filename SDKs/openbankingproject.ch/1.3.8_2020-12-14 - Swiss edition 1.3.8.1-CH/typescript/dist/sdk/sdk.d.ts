import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { AccountInformationServiceAis } from "./accountinformationserviceais";
import { CommonServices } from "./commonservices";
import { ConfirmationOfFundsServicePiis } from "./confirmationoffundsservicepiis";
import { PaymentInitiationServicePis } from "./paymentinitiationservicepis";
import { SigningBasketsServiceSbs } from "./signingbasketsservicesbs";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.dev.openbankingproject.ch"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    accountInformationServiceAis: AccountInformationServiceAis;
    commonServices: CommonServices;
    confirmationOfFundsServicePiis: ConfirmationOfFundsServicePiis;
    paymentInitiationServicePis: PaymentInitiationServicePis;
    signingBasketsServiceSbs: SigningBasketsServiceSbs;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
