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
     * deleteImagesId - Delete an Image
     *
     * Deletes an Image. Only Images of type `snapshot` and `backup` can be deleted.
    **/
    deleteImagesId(req: operations.DeleteImagesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImagesIdResponse>;
    /**
     * getImages - Get all Images
     *
     * Returns all Image objects. You can select specific Image types only and sort the results by using URI parameters.
    **/
    getImages(req: operations.GetImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetImagesResponse>;
    /**
     * getImagesId - Get an Image
     *
     * Returns a specific Image object.
    **/
    getImagesId(req: operations.GetImagesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetImagesIdResponse>;
    /**
     * putImagesId - Update an Image
     *
     * Updates the Image. You may change the description, convert a Backup Image to a Snapshot Image or change the Image labels. Only Images of type `snapshot` and `backup` can be updated.
     *
     * Note that when updating labels, the current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     *
    **/
    putImagesId(req: operations.PutImagesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutImagesIdResponse>;
}
