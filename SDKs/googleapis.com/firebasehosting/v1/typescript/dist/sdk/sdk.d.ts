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
    FirebasehostingOperationsCancel(req: operations.FirebasehostingOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingOperationsCancelResponse>;
    FirebasehostingOperationsDelete(req: operations.FirebasehostingOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingOperationsDeleteResponse>;
    FirebasehostingOperationsList(req: operations.FirebasehostingOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.FirebasehostingOperationsListResponse>;
}
export {};
