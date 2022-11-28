import { AxiosInstance } from "axios";
import { Hashes } from "./hashes";
import { Projects } from "./projects";
import { ThreatLists } from "./threatlists";
import { Uris } from "./uris";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://webrisk.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    hashes: Hashes;
    projects: Projects;
    threatLists: ThreatLists;
    uris: Uris;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
