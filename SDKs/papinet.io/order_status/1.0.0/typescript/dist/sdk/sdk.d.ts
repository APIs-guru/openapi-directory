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
     * Gets a paginated list of all `orders`.
    **/
    GetOrders(req: operations.GetOrdersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersResponse>;
    /**
     * Gets the details of a specific `order`, including a paginated list of all its lines.
    **/
    GetOrdersOrderId(req: operations.GetOrdersOrderIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersOrderIdResponse>;
}
export {};
