import { AxiosInstance } from "axios";
import { Api } from "./api";
import { Projects } from "./projects";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://cloudtasks.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    api: Api;
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
