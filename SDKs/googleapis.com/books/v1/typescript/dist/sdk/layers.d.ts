import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Layers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * booksLayersAnnotationDataGet - Gets the annotation data.
    **/
    booksLayersAnnotationDataGet(req: operations.BooksLayersAnnotationDataGetRequest, config?: AxiosRequestConfig): Promise<operations.BooksLayersAnnotationDataGetResponse>;
    /**
     * booksLayersAnnotationDataList - Gets the annotation data for a volume and layer.
    **/
    booksLayersAnnotationDataList(req: operations.BooksLayersAnnotationDataListRequest, config?: AxiosRequestConfig): Promise<operations.BooksLayersAnnotationDataListResponse>;
    /**
     * booksLayersGet - Gets the layer summary for a volume.
    **/
    booksLayersGet(req: operations.BooksLayersGetRequest, config?: AxiosRequestConfig): Promise<operations.BooksLayersGetResponse>;
    /**
     * booksLayersList - List the layer summaries for a volume.
    **/
    booksLayersList(req: operations.BooksLayersListRequest, config?: AxiosRequestConfig): Promise<operations.BooksLayersListResponse>;
    /**
     * booksLayersVolumeAnnotationsGet - Gets the volume annotation.
    **/
    booksLayersVolumeAnnotationsGet(req: operations.BooksLayersVolumeAnnotationsGetRequest, config?: AxiosRequestConfig): Promise<operations.BooksLayersVolumeAnnotationsGetResponse>;
    /**
     * booksLayersVolumeAnnotationsList - Gets the volume annotations for a volume and layer.
    **/
    booksLayersVolumeAnnotationsList(req: operations.BooksLayersVolumeAnnotationsListRequest, config?: AxiosRequestConfig): Promise<operations.BooksLayersVolumeAnnotationsListResponse>;
}
