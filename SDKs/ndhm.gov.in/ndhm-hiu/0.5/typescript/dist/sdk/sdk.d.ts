import { AxiosInstance } from "axios";
import { Gateway } from "./gateway";
import { ConsentFlow } from "./consentflow";
import { DataFlow } from "./dataflow";
import { Identification } from "./identification";
import { Monitoring } from "./monitoring";
import { Subscriptions } from "./subscriptions";
import { UserAuth } from "./userauth";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://dev.ndhm.gov.in/gateway"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    gateway: Gateway;
    consentFlow: ConsentFlow;
    dataFlow: DataFlow;
    identification: Identification;
    monitoring: Monitoring;
    subscriptions: Subscriptions;
    userAuth: UserAuth;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
