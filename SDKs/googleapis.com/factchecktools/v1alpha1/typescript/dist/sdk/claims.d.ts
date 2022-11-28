import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Claims {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * factchecktoolsClaimsSearch - Search through fact-checked claims.
    **/
    factchecktoolsClaimsSearch(req: operations.FactchecktoolsClaimsSearchRequest, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsClaimsSearchResponse>;
}
