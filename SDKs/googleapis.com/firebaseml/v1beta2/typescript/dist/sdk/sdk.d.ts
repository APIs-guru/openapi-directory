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
    FirebasemlProjectsModelsCreate(req: operations.FirebasemlProjectsModelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsModelsCreateResponse>;
    FirebasemlProjectsModelsDelete(req: operations.FirebasemlProjectsModelsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsModelsDeleteResponse>;
    FirebasemlProjectsModelsDownload(req: operations.FirebasemlProjectsModelsDownloadRequest, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsModelsDownloadResponse>;
    FirebasemlProjectsModelsList(req: operations.FirebasemlProjectsModelsListRequest, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsModelsListResponse>;
    FirebasemlProjectsModelsPatch(req: operations.FirebasemlProjectsModelsPatchRequest, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsModelsPatchResponse>;
    FirebasemlProjectsOperationsGet(req: operations.FirebasemlProjectsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsOperationsGetResponse>;
}
export {};
