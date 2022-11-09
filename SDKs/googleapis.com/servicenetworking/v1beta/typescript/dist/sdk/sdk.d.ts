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
    ServicenetworkingOperationsGet(req: operations.ServicenetworkingOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingOperationsGetResponse>;
    ServicenetworkingServicesAddSubnetwork(req: operations.ServicenetworkingServicesAddSubnetworkRequest, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesAddSubnetworkResponse>;
    ServicenetworkingServicesConnectionsCreate(req: operations.ServicenetworkingServicesConnectionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesConnectionsCreateResponse>;
    ServicenetworkingServicesConnectionsList(req: operations.ServicenetworkingServicesConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesConnectionsListResponse>;
    ServicenetworkingServicesSearchRange(req: operations.ServicenetworkingServicesSearchRangeRequest, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesSearchRangeResponse>;
    ServicenetworkingServicesUpdateConnections(req: operations.ServicenetworkingServicesUpdateConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesUpdateConnectionsResponse>;
}
export {};
