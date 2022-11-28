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
     * getcurrencyrate - Gets a foreign currency rate for one US Dollar
     *
     * Use a currency symbol (EUR, GBP, CNY, JPY, AUD, etc.) to obtain a live currency foreign exchange rate for one US Dollar. See the API home page for list of all supported currencies.
    **/
    getcurrencyrate(req: operations.GetcurrencyrateRequest, config?: AxiosRequestConfig): Promise<operations.GetcurrencyrateResponse>;
}
export {};
