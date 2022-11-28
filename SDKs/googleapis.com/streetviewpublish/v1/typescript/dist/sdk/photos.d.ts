import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Photos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * streetviewpublishPhotosBatchDelete - Deletes a list of Photos and their metadata. Note that if BatchDeletePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchDeletePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchDeletePhotosResponse.results. See DeletePhoto for specific failures that can occur per photo.
    **/
    streetviewpublishPhotosBatchDelete(req: operations.StreetviewpublishPhotosBatchDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StreetviewpublishPhotosBatchDeleteResponse>;
    /**
     * streetviewpublishPhotosBatchGet - Gets the metadata of the specified Photo batch. Note that if BatchGetPhotos fails, either critical fields are missing or there is an authentication error. Even if BatchGetPhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchGetPhotosResponse.results. See GetPhoto for specific failures that can occur per photo.
    **/
    streetviewpublishPhotosBatchGet(req: operations.StreetviewpublishPhotosBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.StreetviewpublishPhotosBatchGetResponse>;
    /**
     * streetviewpublishPhotosBatchUpdate - Updates the metadata of Photos, such as pose, place association, connections, etc. Changing the pixels of photos is not supported. Note that if BatchUpdatePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchUpdatePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchUpdatePhotosResponse.results. See UpdatePhoto for specific failures that can occur per photo. Only the fields specified in updateMask field are used. If `updateMask` is not present, the update applies to all fields. The number of UpdatePhotoRequest messages in a BatchUpdatePhotosRequest must not exceed 20. > Note: To update Pose.altitude, Pose.latLngPair has to be filled as well. Otherwise, the request will fail.
    **/
    streetviewpublishPhotosBatchUpdate(req: operations.StreetviewpublishPhotosBatchUpdateRequest, config?: AxiosRequestConfig): Promise<operations.StreetviewpublishPhotosBatchUpdateResponse>;
    /**
     * streetviewpublishPhotosList - Lists all the Photos that belong to the user. > Note: Recently created photos that are still being indexed are not returned in the response.
    **/
    streetviewpublishPhotosList(req: operations.StreetviewpublishPhotosListRequest, config?: AxiosRequestConfig): Promise<operations.StreetviewpublishPhotosListResponse>;
}
