import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.nytimes.com/svc/topstories/v2", "https://api.nytimes.com/svc/topstories/v2"];
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
     * getSectionFormat - Top Stories
     *
     * The Top Stories API returns a list of articles and associated images currently on the specified section.  Support JSON and JSONP.
     *
    **/
    getSectionFormat(req: operations.GetSectionFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionFormatResponse>;
}
export {};
