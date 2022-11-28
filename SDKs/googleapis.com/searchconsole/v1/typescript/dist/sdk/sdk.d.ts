import { AxiosInstance } from "axios";
import { Searchanalytics } from "./searchanalytics";
import { Sitemaps } from "./sitemaps";
import { Sites } from "./sites";
import { UrlInspection } from "./urlinspection";
import { UrlTestingTools } from "./urltestingtools";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://searchconsole.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    searchanalytics: Searchanalytics;
    sitemaps: Sitemaps;
    sites: Sites;
    urlInspection: UrlInspection;
    urlTestingTools: UrlTestingTools;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
