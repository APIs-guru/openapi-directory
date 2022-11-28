import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://southcentralus.api.cognitive.microsoft.com/customvision/v1.1/Prediction"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * predictImage - Predict an image and saves the result
    **/
    predictImage(req: operations.PredictImageRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageResponse>;
    /**
     * predictImageUrl - Predict an image url and saves the result
    **/
    predictImageUrl(req: operations.PredictImageUrlRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageUrlResponse>;
    /**
     * predictImageUrlWithNoStore - Predict an image url without saving the result
    **/
    predictImageUrlWithNoStore(req: operations.PredictImageUrlWithNoStoreRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageUrlWithNoStoreResponse>;
    /**
     * predictImageWithNoStore - Predict an image without saving the result
    **/
    predictImageWithNoStore(req: operations.PredictImageWithNoStoreRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageWithNoStoreResponse>;
}
export {};
