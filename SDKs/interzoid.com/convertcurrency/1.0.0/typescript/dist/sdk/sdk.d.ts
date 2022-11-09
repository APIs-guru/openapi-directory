import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Provide an amount in one currency (EUR, GBP, CNY, JPY, AUD, etc.), and also a second currency to convert it to. The API will return the result using current foreign exchange rates. See the API home page for a list of all supported currencies.
    **/
    Convertcurrency(req: operations.ConvertcurrencyRequest, config?: AxiosRequestConfig): Promise<operations.ConvertcurrencyResponse>;
}
export {};
