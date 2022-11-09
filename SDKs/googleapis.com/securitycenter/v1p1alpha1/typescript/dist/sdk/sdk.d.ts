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
    SecuritycenterOrganizationsOperationsCancel(req: operations.SecuritycenterOrganizationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsOperationsCancelResponse>;
    SecuritycenterOrganizationsOperationsDelete(req: operations.SecuritycenterOrganizationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsOperationsDeleteResponse>;
    SecuritycenterOrganizationsOperationsList(req: operations.SecuritycenterOrganizationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsOperationsListResponse>;
}
export {};
