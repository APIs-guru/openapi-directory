import { AxiosInstance } from "axios";
import { Operations } from "./operations";
import { Services } from "./services";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://servicemanagement.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    operations: Operations;
    services: Services;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
