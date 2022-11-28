import { AxiosInstance } from "axios";
import { Subscriptions } from "./subscriptions";
import { Topics } from "./topics";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://pubsub.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    subscriptions: Subscriptions;
    topics: Topics;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
