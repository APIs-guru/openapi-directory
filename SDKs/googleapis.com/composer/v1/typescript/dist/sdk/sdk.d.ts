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
    ComposerProjectsLocationsEnvironmentsCreate(req: operations.ComposerProjectsLocationsEnvironmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsCreateResponse>;
    ComposerProjectsLocationsEnvironmentsList(req: operations.ComposerProjectsLocationsEnvironmentsListRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsListResponse>;
    ComposerProjectsLocationsEnvironmentsPatch(req: operations.ComposerProjectsLocationsEnvironmentsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsPatchResponse>;
    ComposerProjectsLocationsImageVersionsList(req: operations.ComposerProjectsLocationsImageVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsImageVersionsListResponse>;
    ComposerProjectsLocationsOperationsDelete(req: operations.ComposerProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsOperationsDeleteResponse>;
    ComposerProjectsLocationsOperationsGet(req: operations.ComposerProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsOperationsGetResponse>;
    ComposerProjectsLocationsOperationsList(req: operations.ComposerProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsOperationsListResponse>;
}
export {};
