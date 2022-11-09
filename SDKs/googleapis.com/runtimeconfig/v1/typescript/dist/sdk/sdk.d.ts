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
    RuntimeconfigOperationsCancel(req: operations.RuntimeconfigOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.RuntimeconfigOperationsCancelResponse>;
    RuntimeconfigOperationsDelete(req: operations.RuntimeconfigOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RuntimeconfigOperationsDeleteResponse>;
    RuntimeconfigOperationsList(req: operations.RuntimeconfigOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.RuntimeconfigOperationsListResponse>;
}
export {};
