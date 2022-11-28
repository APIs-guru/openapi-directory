import { AxiosInstance } from "axios";
import { Admin } from "./admin";
import { Cursor } from "./cursor";
import { TopicStats } from "./topicstats";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://pubsublite.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    admin: Admin;
    cursor: Cursor;
    topicStats: TopicStats;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
