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
    CloudshellOperationsCancel(req: operations.CloudshellOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.CloudshellOperationsCancelResponse>;
    CloudshellOperationsDelete(req: operations.CloudshellOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudshellOperationsDeleteResponse>;
    CloudshellUsersEnvironmentsAddPublicKey(req: operations.CloudshellUsersEnvironmentsAddPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.CloudshellUsersEnvironmentsAddPublicKeyResponse>;
    CloudshellUsersEnvironmentsAuthorize(req: operations.CloudshellUsersEnvironmentsAuthorizeRequest, config?: AxiosRequestConfig): Promise<operations.CloudshellUsersEnvironmentsAuthorizeResponse>;
    CloudshellUsersEnvironmentsGet(req: operations.CloudshellUsersEnvironmentsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudshellUsersEnvironmentsGetResponse>;
    CloudshellUsersEnvironmentsRemovePublicKey(req: operations.CloudshellUsersEnvironmentsRemovePublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.CloudshellUsersEnvironmentsRemovePublicKeyResponse>;
    CloudshellUsersEnvironmentsStart(req: operations.CloudshellUsersEnvironmentsStartRequest, config?: AxiosRequestConfig): Promise<operations.CloudshellUsersEnvironmentsStartResponse>;
}
export {};
