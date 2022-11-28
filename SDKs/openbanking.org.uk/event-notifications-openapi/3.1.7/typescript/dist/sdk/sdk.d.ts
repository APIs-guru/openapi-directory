import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://openbanking.org.uk", "https://openbanking.org.uk/open-banking/v3.1"];
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
     * createEventNotification - Send an event notification
    **/
    createEventNotification(req: operations.CreateEventNotificationRequest, config?: AxiosRequestConfig): Promise<operations.CreateEventNotificationResponse>;
}
export {};
