import { AxiosInstance } from "axios";
import { Ideas } from "./ideas";
import { Platforms } from "./platforms";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://ideahub.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    ideas: Ideas;
    platforms: Platforms;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
