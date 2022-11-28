import { AxiosInstance } from "axios";
import { Catalog } from "./catalog";
import { Entries } from "./entries";
import { Projects } from "./projects";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://datacatalog.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    catalog: Catalog;
    entries: Entries;
    projects: Projects;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
