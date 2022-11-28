import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DefaultSupportedIdps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * identitytoolkitDefaultSupportedIdpsList - List all default supported Idps.
    **/
    identitytoolkitDefaultSupportedIdpsList(req: operations.IdentitytoolkitDefaultSupportedIdpsListRequest, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitDefaultSupportedIdpsListResponse>;
}
