import { AxiosInstance } from "axios";
import { Feed } from "./feed";
import { Neo } from "./neo";
import { Neosentry } from "./neosentry";
import { Stats } from "./stats";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://www.neowsapp.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    feed: Feed;
    neo: Neo;
    neosentry: Neosentry;
    stats: Stats;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
