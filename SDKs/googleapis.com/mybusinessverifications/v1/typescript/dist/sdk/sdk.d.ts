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
    MybusinessverificationsLocationsFetchVerificationOptions(req: operations.MybusinessverificationsLocationsFetchVerificationOptionsRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessverificationsLocationsFetchVerificationOptionsResponse>;
    MybusinessverificationsLocationsGetVoiceOfMerchantState(req: operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateResponse>;
    MybusinessverificationsLocationsVerificationsComplete(req: operations.MybusinessverificationsLocationsVerificationsCompleteRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessverificationsLocationsVerificationsCompleteResponse>;
    MybusinessverificationsLocationsVerificationsList(req: operations.MybusinessverificationsLocationsVerificationsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessverificationsLocationsVerificationsListResponse>;
    MybusinessverificationsLocationsVerify(req: operations.MybusinessverificationsLocationsVerifyRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessverificationsLocationsVerifyResponse>;
    MybusinessverificationsVerificationTokensGenerate(req: operations.MybusinessverificationsVerificationTokensGenerateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessverificationsVerificationTokensGenerateResponse>;
}
export {};
