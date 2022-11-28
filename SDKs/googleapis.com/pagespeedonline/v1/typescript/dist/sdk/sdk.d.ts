import { AxiosInstance } from "axios";
import { Pagespeedapi } from "./pagespeedapi";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://www.googleapis.com/pagespeedonline/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    pagespeedapi: Pagespeedapi;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
