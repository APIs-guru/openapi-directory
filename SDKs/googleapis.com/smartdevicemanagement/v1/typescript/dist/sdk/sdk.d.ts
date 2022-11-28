import { AxiosInstance } from "axios";
import { Enterprises } from "./enterprises";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://smartdevicemanagement.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    enterprises: Enterprises;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
