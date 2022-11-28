import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://openbanking.org.uk", "https://openbanking.org.uk/open-banking/v3.1/cbpii"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createFundsConfirmationConsents - Create Funds Confirmation Consent
    **/
    createFundsConfirmationConsents(req: operations.CreateFundsConfirmationConsentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateFundsConfirmationConsentsResponse>;
    /**
     * createFundsConfirmations - Create Funds Confirmation
    **/
    createFundsConfirmations(req: operations.CreateFundsConfirmationsRequest, config?: AxiosRequestConfig): Promise<operations.CreateFundsConfirmationsResponse>;
    /**
     * deleteFundsConfirmationConsentsConsentId - Delete Funds Confirmation Consent
    **/
    deleteFundsConfirmationConsentsConsentId(req: operations.DeleteFundsConfirmationConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFundsConfirmationConsentsConsentIdResponse>;
    /**
     * getFundsConfirmationConsentsConsentId - Get Funds Confirmation Consent
    **/
    getFundsConfirmationConsentsConsentId(req: operations.GetFundsConfirmationConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFundsConfirmationConsentsConsentIdResponse>;
}
export {};
