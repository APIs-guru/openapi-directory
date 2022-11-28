import { AxiosInstance } from "axios";
import { Processes } from "./processes";
import { Projects } from "./projects";
import { Scripts } from "./scripts";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://script.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    processes: Processes;
    projects: Projects;
    scripts: Scripts;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
