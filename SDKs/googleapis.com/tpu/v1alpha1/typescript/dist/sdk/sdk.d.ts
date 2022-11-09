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
    TpuProjectsLocationsAcceleratorTypesList(req: operations.TpuProjectsLocationsAcceleratorTypesListRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsAcceleratorTypesListResponse>;
    TpuProjectsLocationsList(req: operations.TpuProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsListResponse>;
    TpuProjectsLocationsNodesCreate(req: operations.TpuProjectsLocationsNodesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesCreateResponse>;
    TpuProjectsLocationsNodesList(req: operations.TpuProjectsLocationsNodesListRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesListResponse>;
    TpuProjectsLocationsNodesReimage(req: operations.TpuProjectsLocationsNodesReimageRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesReimageResponse>;
    TpuProjectsLocationsNodesStart(req: operations.TpuProjectsLocationsNodesStartRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesStartResponse>;
    TpuProjectsLocationsNodesStop(req: operations.TpuProjectsLocationsNodesStopRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesStopResponse>;
    TpuProjectsLocationsOperationsCancel(req: operations.TpuProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsOperationsCancelResponse>;
    TpuProjectsLocationsOperationsDelete(req: operations.TpuProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsOperationsDeleteResponse>;
    TpuProjectsLocationsOperationsList(req: operations.TpuProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsOperationsListResponse>;
    TpuProjectsLocationsTensorflowVersionsGet(req: operations.TpuProjectsLocationsTensorflowVersionsGetRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsTensorflowVersionsGetResponse>;
    TpuProjectsLocationsTensorflowVersionsList(req: operations.TpuProjectsLocationsTensorflowVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsTensorflowVersionsListResponse>;
}
export {};
