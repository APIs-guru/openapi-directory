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
     * The area code will be parsed out of a telephone number and used to retrieve information about the area code.
    **/
    Getareacodefromnumber(req: operations.GetareacodefromnumberRequest, config?: AxiosRequestConfig): Promise<operations.GetareacodefromnumberResponse>;
}
export {};
