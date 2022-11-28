import { AxiosInstance } from "axios";
import { Balance } from "./balance";
import { Configuration } from "./configuration";
import { SecretManagement } from "./secretmanagement";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.nexmo.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    balance: Balance;
    configuration: Configuration;
    secretManagement: SecretManagement;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
