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
     * firebasemlProjectsModelsCreate - Creates a model in Firebase ML. The longrunning operation will eventually return a Model
    **/
    firebasemlProjectsModelsCreate(req: operations.FirebasemlProjectsModelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsModelsCreateResponse>;
    /**
     * firebasemlProjectsModelsDelete - Deletes a model
    **/
    firebasemlProjectsModelsDelete(req: operations.FirebasemlProjectsModelsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsModelsDeleteResponse>;
    /**
     * firebasemlProjectsModelsDownload - Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.
    **/
    firebasemlProjectsModelsDownload(req: operations.FirebasemlProjectsModelsDownloadRequest, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsModelsDownloadResponse>;
    /**
     * firebasemlProjectsModelsList - Lists the models
    **/
    firebasemlProjectsModelsList(req: operations.FirebasemlProjectsModelsListRequest, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsModelsListResponse>;
    /**
     * firebasemlProjectsModelsPatch - Updates a model. The longrunning operation will eventually return a Model.
    **/
    firebasemlProjectsModelsPatch(req: operations.FirebasemlProjectsModelsPatchRequest, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsModelsPatchResponse>;
    /**
     * firebasemlProjectsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    firebasemlProjectsOperationsGet(req: operations.FirebasemlProjectsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.FirebasemlProjectsOperationsGetResponse>;
}
