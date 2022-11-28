import { AxiosInstance } from "axios";
import { Operations } from "./operations";
import { Projects } from "./projects";
import { Speech } from "./speech";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://speech.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    operations: Operations;
    projects: Projects;
    speech: Speech;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
