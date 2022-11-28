import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * tpuProjectsLocationsAcceleratorTypesList - Lists accelerator types supported by this API.
    **/
    tpuProjectsLocationsAcceleratorTypesList(req: operations.TpuProjectsLocationsAcceleratorTypesListRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsAcceleratorTypesListResponse>;
    /**
     * tpuProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    tpuProjectsLocationsList(req: operations.TpuProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsListResponse>;
    /**
     * tpuProjectsLocationsNodesCreate - Creates a node.
    **/
    tpuProjectsLocationsNodesCreate(req: operations.TpuProjectsLocationsNodesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesCreateResponse>;
    /**
     * tpuProjectsLocationsNodesList - Lists nodes.
    **/
    tpuProjectsLocationsNodesList(req: operations.TpuProjectsLocationsNodesListRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesListResponse>;
    /**
     * tpuProjectsLocationsNodesReimage - Reimages a node's OS.
    **/
    tpuProjectsLocationsNodesReimage(req: operations.TpuProjectsLocationsNodesReimageRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesReimageResponse>;
    /**
     * tpuProjectsLocationsNodesStart - Starts a node.
    **/
    tpuProjectsLocationsNodesStart(req: operations.TpuProjectsLocationsNodesStartRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesStartResponse>;
    /**
     * tpuProjectsLocationsNodesStop - Stops a node, this operation is only available with single TPU nodes.
    **/
    tpuProjectsLocationsNodesStop(req: operations.TpuProjectsLocationsNodesStopRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesStopResponse>;
    /**
     * tpuProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    tpuProjectsLocationsOperationsCancel(req: operations.TpuProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsOperationsCancelResponse>;
    /**
     * tpuProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    tpuProjectsLocationsOperationsDelete(req: operations.TpuProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsOperationsDeleteResponse>;
    /**
     * tpuProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    tpuProjectsLocationsOperationsList(req: operations.TpuProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsOperationsListResponse>;
    /**
     * tpuProjectsLocationsTensorflowVersionsGet - Gets TensorFlow Version.
    **/
    tpuProjectsLocationsTensorflowVersionsGet(req: operations.TpuProjectsLocationsTensorflowVersionsGetRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsTensorflowVersionsGetResponse>;
    /**
     * tpuProjectsLocationsTensorflowVersionsList - List TensorFlow versions supported by this API.
    **/
    tpuProjectsLocationsTensorflowVersionsList(req: operations.TpuProjectsLocationsTensorflowVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsTensorflowVersionsListResponse>;
}
