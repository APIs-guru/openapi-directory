import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VerificationTokens {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mybusinessverificationsVerificationTokensGenerate - Generates a token for the provided location data as a vetted [partner](https://support.google.com/business/answer/7674102). Throws PERMISSION_DENIED if the caller is not a vetted partner account. Throws FAILED_PRECONDITION if the caller's VettedStatus is INVALID.
    **/
    mybusinessverificationsVerificationTokensGenerate(req: operations.MybusinessverificationsVerificationTokensGenerateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessverificationsVerificationTokensGenerateResponse>;
}
