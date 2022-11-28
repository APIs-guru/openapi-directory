import { AxiosInstance } from "axios";
import { Callbacks } from "./callbacks";
import { Definitions } from "./definitions";
import { Functions } from "./functions";
import { Revisions } from "./revisions";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.hubapi.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    callbacks: Callbacks;
    definitions: Definitions;
    functions: Functions;
    revisions: Revisions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
