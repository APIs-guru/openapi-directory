import { AxiosInstance } from "axios";
import { Entries } from "./entries";
import { MonitoredResourceDescriptors } from "./monitoredresourcedescriptors";
import { Projects } from "./projects";
import { Sinks } from "./sinks";
import { V2 } from "./v2";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://logging.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    entries: Entries;
    monitoredResourceDescriptors: MonitoredResourceDescriptors;
    projects: Projects;
    sinks: Sinks;
    v2: V2;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
