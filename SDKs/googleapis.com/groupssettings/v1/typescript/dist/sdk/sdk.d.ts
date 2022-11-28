import { AxiosInstance } from "axios";
import { Groups } from "./groups";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://www.googleapis.com/groups/v1/groups"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    groups: Groups;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
