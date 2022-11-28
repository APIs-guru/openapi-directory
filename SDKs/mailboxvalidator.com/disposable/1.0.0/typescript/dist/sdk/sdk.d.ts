import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://virtserver.swaggerhub.com/mailboxvalidator/MailboxValidator-Disposable-Email-Checker/1.0.0", "https://api.mailboxvalidator.com/"];
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
     * getV1EmailDisposable - The Disposable Email Checker API does checking on a single email address and returns if it is from a disposable email provider in either JSON or XML format.
    **/
    getV1EmailDisposable(req: operations.GetV1EmailDisposableRequest, config?: AxiosRequestConfig): Promise<operations.GetV1EmailDisposableResponse>;
}
export {};
