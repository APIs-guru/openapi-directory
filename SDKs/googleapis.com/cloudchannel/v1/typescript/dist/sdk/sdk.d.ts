import { AxiosInstance } from "axios";
import { Accounts } from "./accounts";
import { Operations } from "./operations";
import { Products } from "./products";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://cloudchannel.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    accounts: Accounts;
    operations: Operations;
    products: Products;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
