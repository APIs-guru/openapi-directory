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
    VideointelligenceOperationsProjectsLocationsOperationsCancel(req: operations.VideointelligenceOperationsProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.VideointelligenceOperationsProjectsLocationsOperationsCancelResponse>;
    VideointelligenceOperationsProjectsLocationsOperationsDelete(req: operations.VideointelligenceOperationsProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VideointelligenceOperationsProjectsLocationsOperationsDeleteResponse>;
    VideointelligenceOperationsProjectsLocationsOperationsGet(req: operations.VideointelligenceOperationsProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.VideointelligenceOperationsProjectsLocationsOperationsGetResponse>;
    VideointelligenceProjectsLocationsOperationsCancel(req: operations.VideointelligenceProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.VideointelligenceProjectsLocationsOperationsCancelResponse>;
    VideointelligenceProjectsLocationsOperationsDelete(req: operations.VideointelligenceProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VideointelligenceProjectsLocationsOperationsDeleteResponse>;
    VideointelligenceProjectsLocationsOperationsGet(req: operations.VideointelligenceProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.VideointelligenceProjectsLocationsOperationsGetResponse>;
    VideointelligenceProjectsLocationsOperationsList(req: operations.VideointelligenceProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.VideointelligenceProjectsLocationsOperationsListResponse>;
    VideointelligenceVideosAnnotate(req: operations.VideointelligenceVideosAnnotateRequest, config?: AxiosRequestConfig): Promise<operations.VideointelligenceVideosAnnotateResponse>;
}
export {};
