import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Images {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * visionImagesAnnotate - Run image detection and annotation for a batch of images.
    **/
    visionImagesAnnotate(req: operations.VisionImagesAnnotateRequest, config?: AxiosRequestConfig): Promise<operations.VisionImagesAnnotateResponse>;
    /**
     * visionImagesAsyncBatchAnnotate - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
    **/
    visionImagesAsyncBatchAnnotate(req: operations.VisionImagesAsyncBatchAnnotateRequest, config?: AxiosRequestConfig): Promise<operations.VisionImagesAsyncBatchAnnotateResponse>;
}
