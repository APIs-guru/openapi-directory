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
    PredictImage(req: operations.PredictImageRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageResponse>;
    PredictImageUrl(req: operations.PredictImageUrlRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageUrlResponse>;
    PredictImageUrlWithNoStore(req: operations.PredictImageUrlWithNoStoreRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageUrlWithNoStoreResponse>;
    PredictImageWithNoStore(req: operations.PredictImageWithNoStoreRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageWithNoStoreResponse>;
}
export {};
