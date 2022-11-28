import { AxiosInstance } from "axios";
import { Searchanalytics } from "./searchanalytics";
import { Sitemaps } from "./sitemaps";
import { Sites } from "./sites";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://www.googleapis.com/webmasters/v3"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    searchanalytics: Searchanalytics;
    sitemaps: Sitemaps;
    sites: Sites;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
