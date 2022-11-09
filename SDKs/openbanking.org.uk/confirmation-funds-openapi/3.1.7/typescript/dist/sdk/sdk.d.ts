import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    CreateFundsConfirmationConsents(req: operations.CreateFundsConfirmationConsentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateFundsConfirmationConsentsResponse>;
    CreateFundsConfirmations(req: operations.CreateFundsConfirmationsRequest, config?: AxiosRequestConfig): Promise<operations.CreateFundsConfirmationsResponse>;
    DeleteFundsConfirmationConsentsConsentId(req: operations.DeleteFundsConfirmationConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFundsConfirmationConsentsConsentIdResponse>;
    GetFundsConfirmationConsentsConsentId(req: operations.GetFundsConfirmationConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFundsConfirmationConsentsConsentIdResponse>;
}
export {};
