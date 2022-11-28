import { AxiosInstance } from "axios";
import { Bidders } from "./bidders";
import { Buyers } from "./buyers";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://realtimebidding.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    bidders: Bidders;
    buyers: Buyers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
