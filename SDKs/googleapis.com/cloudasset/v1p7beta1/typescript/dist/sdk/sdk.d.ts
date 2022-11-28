import { AxiosInstance } from "axios";
import { Operations } from "./operations";
import { V1p7beta1 } from "./v1p7beta1";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://cloudasset.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    operations: Operations;
    v1p7beta1: V1p7beta1;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
