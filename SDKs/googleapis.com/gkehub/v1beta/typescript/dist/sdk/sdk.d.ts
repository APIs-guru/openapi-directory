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
    GkehubProjectsLocationsFeaturesCreate(req: operations.GkehubProjectsLocationsFeaturesCreateRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsFeaturesCreateResponse>;
    GkehubProjectsLocationsFeaturesList(req: operations.GkehubProjectsLocationsFeaturesListRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsFeaturesListResponse>;
    GkehubProjectsLocationsFeaturesPatch(req: operations.GkehubProjectsLocationsFeaturesPatchRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsFeaturesPatchResponse>;
    GkehubProjectsLocationsList(req: operations.GkehubProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsListResponse>;
    GkehubProjectsLocationsMembershipsGetIamPolicy(req: operations.GkehubProjectsLocationsMembershipsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsGetIamPolicyResponse>;
    GkehubProjectsLocationsMembershipsSetIamPolicy(req: operations.GkehubProjectsLocationsMembershipsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsSetIamPolicyResponse>;
    GkehubProjectsLocationsMembershipsTestIamPermissions(req: operations.GkehubProjectsLocationsMembershipsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsTestIamPermissionsResponse>;
    GkehubProjectsLocationsOperationsCancel(req: operations.GkehubProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsCancelResponse>;
    GkehubProjectsLocationsOperationsDelete(req: operations.GkehubProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsDeleteResponse>;
    GkehubProjectsLocationsOperationsGet(req: operations.GkehubProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsGetResponse>;
    GkehubProjectsLocationsOperationsList(req: operations.GkehubProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsListResponse>;
}
export {};
