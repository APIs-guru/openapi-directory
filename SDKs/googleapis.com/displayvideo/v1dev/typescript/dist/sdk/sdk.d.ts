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
    DisplayvideoMediaDownload(req: operations.DisplayvideoMediaDownloadRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoMediaDownloadResponse>;
    DisplayvideoMediaUpload(req: operations.DisplayvideoMediaUploadRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoMediaUploadResponse>;
    DisplayvideoSdfdownloadtasksOperationsGet(req: operations.DisplayvideoSdfdownloadtasksOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoSdfdownloadtasksOperationsGetResponse>;
}
export {};
