import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.mailboxvalidator.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getV1ValidationSingle - The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format.
    **/
    getV1ValidationSingle(req: operations.GetV1ValidationSingleRequest, config?: AxiosRequestConfig): Promise<operations.GetV1ValidationSingleResponse>;
}
export {};
