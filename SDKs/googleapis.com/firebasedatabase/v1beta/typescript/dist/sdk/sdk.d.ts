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
    FirebasedatabaseProjectsLocationsInstancesCreate(req: operations.FirebasedatabaseProjectsLocationsInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedatabaseProjectsLocationsInstancesCreateResponse>;
    FirebasedatabaseProjectsLocationsInstancesDelete(req: operations.FirebasedatabaseProjectsLocationsInstancesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedatabaseProjectsLocationsInstancesDeleteResponse>;
    FirebasedatabaseProjectsLocationsInstancesDisable(req: operations.FirebasedatabaseProjectsLocationsInstancesDisableRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedatabaseProjectsLocationsInstancesDisableResponse>;
    FirebasedatabaseProjectsLocationsInstancesGet(req: operations.FirebasedatabaseProjectsLocationsInstancesGetRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedatabaseProjectsLocationsInstancesGetResponse>;
    FirebasedatabaseProjectsLocationsInstancesList(req: operations.FirebasedatabaseProjectsLocationsInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedatabaseProjectsLocationsInstancesListResponse>;
    FirebasedatabaseProjectsLocationsInstancesReenable(req: operations.FirebasedatabaseProjectsLocationsInstancesReenableRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedatabaseProjectsLocationsInstancesReenableResponse>;
    FirebasedatabaseProjectsLocationsInstancesUndelete(req: operations.FirebasedatabaseProjectsLocationsInstancesUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedatabaseProjectsLocationsInstancesUndeleteResponse>;
}
export {};
