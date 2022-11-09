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
    NetworkconnectivityProjectsLocationsGlobalHubsCreate(req: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse>;
    NetworkconnectivityProjectsLocationsGlobalHubsList(req: operations.NetworkconnectivityProjectsLocationsGlobalHubsListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsGlobalHubsListResponse>;
    NetworkconnectivityProjectsLocationsList(req: operations.NetworkconnectivityProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsListResponse>;
    NetworkconnectivityProjectsLocationsOperationsCancel(req: operations.NetworkconnectivityProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsOperationsCancelResponse>;
    NetworkconnectivityProjectsLocationsOperationsList(req: operations.NetworkconnectivityProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsOperationsListResponse>;
    NetworkconnectivityProjectsLocationsSpokesCreate(req: operations.NetworkconnectivityProjectsLocationsSpokesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesCreateResponse>;
    NetworkconnectivityProjectsLocationsSpokesDelete(req: operations.NetworkconnectivityProjectsLocationsSpokesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesDeleteResponse>;
    NetworkconnectivityProjectsLocationsSpokesGet(req: operations.NetworkconnectivityProjectsLocationsSpokesGetRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesGetResponse>;
    NetworkconnectivityProjectsLocationsSpokesGetIamPolicy(req: operations.NetworkconnectivityProjectsLocationsSpokesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesGetIamPolicyResponse>;
    NetworkconnectivityProjectsLocationsSpokesList(req: operations.NetworkconnectivityProjectsLocationsSpokesListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesListResponse>;
    NetworkconnectivityProjectsLocationsSpokesPatch(req: operations.NetworkconnectivityProjectsLocationsSpokesPatchRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesPatchResponse>;
    NetworkconnectivityProjectsLocationsSpokesSetIamPolicy(req: operations.NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesSetIamPolicyResponse>;
    NetworkconnectivityProjectsLocationsSpokesTestIamPermissions(req: operations.NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsResponse>;
}
export {};
