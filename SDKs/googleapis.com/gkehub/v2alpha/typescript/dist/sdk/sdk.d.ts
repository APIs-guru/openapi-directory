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
    GkehubProjectsLocationsList(req: operations.GkehubProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsListResponse>;
    GkehubProjectsLocationsOperationsCancel(req: operations.GkehubProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsCancelResponse>;
    GkehubProjectsLocationsOperationsGet(req: operations.GkehubProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsGetResponse>;
    GkehubProjectsLocationsOperationsList(req: operations.GkehubProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsListResponse>;
}
export {};
