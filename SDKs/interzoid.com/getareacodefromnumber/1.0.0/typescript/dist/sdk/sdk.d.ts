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
     * getareacodefromnumber - Gets area code information from a telephone number
     *
     * The area code will be parsed out of a telephone number and used to retrieve information about the area code.
    **/
    getareacodefromnumber(req: operations.GetareacodefromnumberRequest, config?: AxiosRequestConfig): Promise<operations.GetareacodefromnumberResponse>;
}
export {};
