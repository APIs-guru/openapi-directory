import { AxiosInstance } from "axios";
import { UrlNotifications } from "./urlnotifications";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://indexing.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    urlNotifications: UrlNotifications;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
