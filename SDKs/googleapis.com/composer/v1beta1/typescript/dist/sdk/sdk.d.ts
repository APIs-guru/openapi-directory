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
    ComposerProjectsLocationsEnvironmentsCheckUpgrade(req: operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse>;
    ComposerProjectsLocationsEnvironmentsCreate(req: operations.ComposerProjectsLocationsEnvironmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsCreateResponse>;
    ComposerProjectsLocationsEnvironmentsList(req: operations.ComposerProjectsLocationsEnvironmentsListRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsListResponse>;
    ComposerProjectsLocationsEnvironmentsLoadSnapshot(req: operations.ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsLoadSnapshotResponse>;
    ComposerProjectsLocationsEnvironmentsPatch(req: operations.ComposerProjectsLocationsEnvironmentsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsPatchResponse>;
    ComposerProjectsLocationsEnvironmentsRestartWebServer(req: operations.ComposerProjectsLocationsEnvironmentsRestartWebServerRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsRestartWebServerResponse>;
    ComposerProjectsLocationsEnvironmentsSaveSnapshot(req: operations.ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsSaveSnapshotResponse>;
    ComposerProjectsLocationsImageVersionsList(req: operations.ComposerProjectsLocationsImageVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsImageVersionsListResponse>;
    ComposerProjectsLocationsOperationsDelete(req: operations.ComposerProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsOperationsDeleteResponse>;
    ComposerProjectsLocationsOperationsGet(req: operations.ComposerProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsOperationsGetResponse>;
    ComposerProjectsLocationsOperationsList(req: operations.ComposerProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsOperationsListResponse>;
}
export {};
