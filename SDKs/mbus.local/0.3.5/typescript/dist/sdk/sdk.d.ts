import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://mbus.local", "https://mbus.local/"];
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
     * get - Gets data from the slave identified by {address}
    **/
    get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * getMulti - Gets data from the slave identified by {address}, and supports multiple responses from the slave
    **/
    getMulti(req: operations.GetMultiRequest, config?: AxiosRequestConfig): Promise<operations.GetMultiResponse>;
    /**
     * hat - Gets Raspberry Pi Hat information
    **/
    hat(config?: AxiosRequestConfig): Promise<operations.HatResponse>;
    /**
     * hatOff - Turns off power to the M-Bus
    **/
    hatOff(config?: AxiosRequestConfig): Promise<operations.HatOffResponse>;
    /**
     * hatOn - Turns on power to the M-Bus
    **/
    hatOn(config?: AxiosRequestConfig): Promise<operations.HatOnResponse>;
    /**
     * mbusApi - Returns this API specification
    **/
    mbusApi(config?: AxiosRequestConfig): Promise<operations.MbusApiResponse>;
    /**
     * scan - Scan the specified device for slaves
    **/
    scan(req: operations.ScanRequest, config?: AxiosRequestConfig): Promise<operations.ScanResponse>;
}
export {};
