import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.interzoid.com"];
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
     * getweatherzipcode - Gets current weather information for a US zip code
     *
     * Use a US zip code to retrieve current weather information
    **/
    getweatherzipcode(req: operations.GetweatherzipcodeRequest, config?: AxiosRequestConfig): Promise<operations.GetweatherzipcodeResponse>;
}
export {};
