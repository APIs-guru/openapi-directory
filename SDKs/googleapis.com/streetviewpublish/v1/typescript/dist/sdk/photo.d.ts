import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Photo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * streetviewpublishPhotoCreate - After the client finishes uploading the photo with the returned UploadRef, CreatePhoto publishes the uploaded Photo to Street View on Google Maps. Currently, the only way to set heading, pitch, and roll in CreatePhoto is through the [Photo Sphere XMP metadata](https://developers.google.com/streetview/spherical-metadata) in the photo bytes. CreatePhoto ignores the `pose.heading`, `pose.pitch`, `pose.roll`, `pose.altitude`, and `pose.level` fields in Pose. This method returns the following error codes: * google.rpc.Code.INVALID_ARGUMENT if the request is malformed or if the uploaded photo is not a 360 photo. * google.rpc.Code.NOT_FOUND if the upload reference does not exist. * google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the storage limit.
    **/
    streetviewpublishPhotoCreate(req: operations.StreetviewpublishPhotoCreateRequest, config?: AxiosRequestConfig): Promise<operations.StreetviewpublishPhotoCreateResponse>;
    /**
     * streetviewpublishPhotoDelete - Deletes a Photo and its metadata. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.NOT_FOUND if the photo ID does not exist.
    **/
    streetviewpublishPhotoDelete(req: operations.StreetviewpublishPhotoDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StreetviewpublishPhotoDeleteResponse>;
    /**
     * streetviewpublishPhotoGet - Gets the metadata of the specified Photo. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested Photo. * google.rpc.Code.NOT_FOUND if the requested Photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.
    **/
    streetviewpublishPhotoGet(req: operations.StreetviewpublishPhotoGetRequest, config?: AxiosRequestConfig): Promise<operations.StreetviewpublishPhotoGetResponse>;
    /**
     * streetviewpublishPhotoStartUpload - Creates an upload session to start uploading photo bytes. The method uses the upload URL of the returned UploadRef to upload the bytes for the Photo. In addition to the photo requirements shown in https://support.google.com/maps/answer/7012050?ref_topic=6275604, the photo must meet the following requirements: * Photo Sphere XMP metadata must be included in the photo metadata. See https://developers.google.com/streetview/spherical-metadata for the required fields. * The pixel size of the photo must meet the size requirements listed in https://support.google.com/maps/answer/7012050?ref_topic=6275604, and the photo must be a full 360 horizontally. After the upload completes, the method uses UploadRef with CreatePhoto to create the Photo object entry.
    **/
    streetviewpublishPhotoStartUpload(req: operations.StreetviewpublishPhotoStartUploadRequest, config?: AxiosRequestConfig): Promise<operations.StreetviewpublishPhotoStartUploadResponse>;
    /**
     * streetviewpublishPhotoUpdate - Updates the metadata of a Photo, such as pose, place association, connections, etc. Changing the pixels of a photo is not supported. Only the fields specified in the updateMask field are used. If `updateMask` is not present, the update applies to all fields. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the requested photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.
    **/
    streetviewpublishPhotoUpdate(req: operations.StreetviewpublishPhotoUpdateRequest, config?: AxiosRequestConfig): Promise<operations.StreetviewpublishPhotoUpdateResponse>;
}
