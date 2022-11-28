import { AxiosInstance } from "axios";
import { Customers } from "./customers";
import { Installer } from "./installer";
import { Nodes } from "./nodes";
import { Policies } from "./policies";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://prod-tt-sasportal.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    customers: Customers;
    installer: Installer;
    nodes: Nodes;
    policies: Policies;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
