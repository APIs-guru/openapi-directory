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
    OsloginUsersGetLoginProfile(req: operations.OsloginUsersGetLoginProfileRequest, config?: AxiosRequestConfig): Promise<operations.OsloginUsersGetLoginProfileResponse>;
    OsloginUsersImportSshPublicKey(req: operations.OsloginUsersImportSshPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.OsloginUsersImportSshPublicKeyResponse>;
    OsloginUsersSshPublicKeysCreate(req: operations.OsloginUsersSshPublicKeysCreateRequest, config?: AxiosRequestConfig): Promise<operations.OsloginUsersSshPublicKeysCreateResponse>;
    OsloginUsersSshPublicKeysDelete(req: operations.OsloginUsersSshPublicKeysDeleteRequest, config?: AxiosRequestConfig): Promise<operations.OsloginUsersSshPublicKeysDeleteResponse>;
    OsloginUsersSshPublicKeysGet(req: operations.OsloginUsersSshPublicKeysGetRequest, config?: AxiosRequestConfig): Promise<operations.OsloginUsersSshPublicKeysGetResponse>;
    OsloginUsersSshPublicKeysPatch(req: operations.OsloginUsersSshPublicKeysPatchRequest, config?: AxiosRequestConfig): Promise<operations.OsloginUsersSshPublicKeysPatchResponse>;
}
export {};
