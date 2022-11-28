import { AxiosInstance } from "axios";
import { InfoTypes } from "./infotypes";
import { Locations } from "./locations";
import { Projects } from "./projects";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://dlp.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    infoTypes: InfoTypes;
    locations: Locations;
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
