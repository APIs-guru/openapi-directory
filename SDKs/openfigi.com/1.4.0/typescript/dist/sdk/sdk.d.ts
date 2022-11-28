import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.openfigi.com/{basePath}"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getMappingValuesKey - Get values for enum-like fields.
    **/
    getMappingValuesKey(req: operations.GetMappingValuesKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetMappingValuesKeyResponse>;
    /**
     * postMapping - Allows mapping from third-party identifiers to FIGIs.
    **/
    postMapping(req: operations.PostMappingRequest, config?: AxiosRequestConfig): Promise<operations.PostMappingResponse>;
}
export {};
