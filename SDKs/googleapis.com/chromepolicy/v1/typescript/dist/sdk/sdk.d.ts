import { AxiosInstance } from "axios";
import { Customers } from "./customers";
import { Media } from "./media";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://chromepolicy.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    customers: Customers;
    media: Media;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
