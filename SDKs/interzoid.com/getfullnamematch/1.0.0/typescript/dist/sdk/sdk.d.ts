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
     * Gets a similarity key for matching purposes for full name data, where first and last name are part of the same field.
    **/
    Getfullnamematch(req: operations.GetfullnamematchRequest, config?: AxiosRequestConfig): Promise<operations.GetfullnamematchResponse>;
}
export {};
