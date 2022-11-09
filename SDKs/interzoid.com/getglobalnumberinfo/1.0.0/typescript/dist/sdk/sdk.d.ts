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
     * Get demographic information for a global telephone number, including city and country information, primary languages spoken, and mobile device identification.
    **/
    Getglobalnumberinfo(req: operations.GetglobalnumberinfoRequest, config?: AxiosRequestConfig): Promise<operations.GetglobalnumberinfoResponse>;
}
export {};
