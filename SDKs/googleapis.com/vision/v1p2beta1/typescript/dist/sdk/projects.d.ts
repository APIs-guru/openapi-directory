import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * visionProjectsLocationsFilesAnnotate - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
    **/
    visionProjectsLocationsFilesAnnotate(req: operations.VisionProjectsLocationsFilesAnnotateRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsFilesAnnotateResponse>;
    /**
     * visionProjectsLocationsFilesAsyncBatchAnnotate - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
    **/
    visionProjectsLocationsFilesAsyncBatchAnnotate(req: operations.VisionProjectsLocationsFilesAsyncBatchAnnotateRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsFilesAsyncBatchAnnotateResponse>;
    /**
     * visionProjectsLocationsImagesAnnotate - Run image detection and annotation for a batch of images.
    **/
    visionProjectsLocationsImagesAnnotate(req: operations.VisionProjectsLocationsImagesAnnotateRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsImagesAnnotateResponse>;
    /**
     * visionProjectsLocationsImagesAsyncBatchAnnotate - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
    **/
    visionProjectsLocationsImagesAsyncBatchAnnotate(req: operations.VisionProjectsLocationsImagesAsyncBatchAnnotateRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsImagesAsyncBatchAnnotateResponse>;
}
