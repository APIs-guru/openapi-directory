import { AxiosInstance } from "axios";
import { SubaccountManagement } from "./subaccountmanagement";
import { Transfers } from "./transfers";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.nexmo.com/accounts"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    subaccountManagement: SubaccountManagement;
    transfers: Transfers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
