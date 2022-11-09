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
    TpuProjectsLocationsGenerateServiceIdentity(req: operations.TpuProjectsLocationsGenerateServiceIdentityRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsGenerateServiceIdentityResponse>;
    TpuProjectsLocationsList(req: operations.TpuProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsListResponse>;
    TpuProjectsLocationsNodesCreate(req: operations.TpuProjectsLocationsNodesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesCreateResponse>;
    TpuProjectsLocationsNodesGetGuestAttributes(req: operations.TpuProjectsLocationsNodesGetGuestAttributesRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesGetGuestAttributesResponse>;
    TpuProjectsLocationsNodesList(req: operations.TpuProjectsLocationsNodesListRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesListResponse>;
    TpuProjectsLocationsNodesPatch(req: operations.TpuProjectsLocationsNodesPatchRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesPatchResponse>;
    TpuProjectsLocationsNodesSimulateMaintenanceEvent(req: operations.TpuProjectsLocationsNodesSimulateMaintenanceEventRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesSimulateMaintenanceEventResponse>;
    TpuProjectsLocationsNodesStart(req: operations.TpuProjectsLocationsNodesStartRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesStartResponse>;
    TpuProjectsLocationsNodesStop(req: operations.TpuProjectsLocationsNodesStopRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesStopResponse>;
    TpuProjectsLocationsOperationsCancel(req: operations.TpuProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsOperationsCancelResponse>;
    TpuProjectsLocationsOperationsDelete(req: operations.TpuProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsOperationsDeleteResponse>;
    TpuProjectsLocationsOperationsList(req: operations.TpuProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsOperationsListResponse>;
    TpuProjectsLocationsRuntimeVersionsGet(req: operations.TpuProjectsLocationsRuntimeVersionsGetRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsRuntimeVersionsGetResponse>;
    TpuProjectsLocationsRuntimeVersionsList(req: operations.TpuProjectsLocationsRuntimeVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsRuntimeVersionsListResponse>;
}
export {};
