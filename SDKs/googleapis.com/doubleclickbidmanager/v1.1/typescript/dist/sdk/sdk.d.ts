import { AxiosInstance } from "axios";
import { Queries } from "./queries";
import { Reports } from "./reports";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://doubleclickbidmanager.googleapis.com/doubleclickbidmanager/v1.1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    queries: Queries;
    reports: Reports;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
