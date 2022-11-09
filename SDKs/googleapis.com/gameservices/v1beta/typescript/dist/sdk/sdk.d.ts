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
    GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicy(req: operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyResponse>;
    GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicy(req: operations.GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyResponse>;
    GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissions(req: operations.GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsResponse>;
    GameservicesProjectsLocationsList(req: operations.GameservicesProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.GameservicesProjectsLocationsListResponse>;
    GameservicesProjectsLocationsOperationsCancel(req: operations.GameservicesProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.GameservicesProjectsLocationsOperationsCancelResponse>;
    GameservicesProjectsLocationsOperationsDelete(req: operations.GameservicesProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GameservicesProjectsLocationsOperationsDeleteResponse>;
    GameservicesProjectsLocationsOperationsGet(req: operations.GameservicesProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.GameservicesProjectsLocationsOperationsGetResponse>;
    GameservicesProjectsLocationsOperationsList(req: operations.GameservicesProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.GameservicesProjectsLocationsOperationsListResponse>;
}
export {};
