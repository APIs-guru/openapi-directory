import { AxiosInstance } from "axios";
import { Liens } from "./liens";
import { Organizations } from "./organizations";
import { Projects } from "./projects";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://cloudresourcemanager.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    liens: Liens;
    organizations: Organizations;
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
