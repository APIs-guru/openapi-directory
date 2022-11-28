import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.nytimes.com/svc/semantic/v2/concept", "https://api.nytimes.com/svc/semantic/v2/concept"];
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
    getNameConceptTypeSpecificConceptJson(req: operations.GetNameConceptTypeSpecificConceptJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetNameConceptTypeSpecificConceptJsonResponse>;
    getSearchJson(req: operations.GetSearchJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchJsonResponse>;
}
export {};
