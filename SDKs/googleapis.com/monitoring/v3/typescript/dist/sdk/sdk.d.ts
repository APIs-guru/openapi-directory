import { AxiosInstance } from "axios";
import { Projects } from "./projects";
import { Services } from "./services";
import { UptimeCheckIps } from "./uptimecheckips";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://monitoring.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    projects: Projects;
    services: Services;
    uptimeCheckIps: UptimeCheckIps;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
