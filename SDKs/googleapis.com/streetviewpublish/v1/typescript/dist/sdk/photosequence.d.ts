import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PhotoSequence {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * streetviewpublishPhotoSequenceCreate - After the client finishes uploading the PhotoSequence with the returned UploadRef, CreatePhotoSequence extracts a sequence of 360 photos from a video or Extensible Device Metadata (XDM, http://www.xdm.org/) to be published to Street View on Google Maps. `CreatePhotoSequence` returns an Operation, with the PhotoSequence Id set in the `Operation.name` field. This method returns the following error codes: * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the upload reference does not exist.
    **/
    streetviewpublishPhotoSequenceCreate(req: operations.StreetviewpublishPhotoSequenceCreateRequest, config?: AxiosRequestConfig): Promise<operations.StreetviewpublishPhotoSequenceCreateResponse>;
    /**
     * streetviewpublishPhotoSequenceDelete - Deletes a PhotoSequence and its metadata. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo sequence. * google.rpc.Code.NOT_FOUND if the photo sequence ID does not exist. * google.rpc.Code.FAILED_PRECONDITION if the photo sequence ID is not yet finished processing.
    **/
    streetviewpublishPhotoSequenceDelete(req: operations.StreetviewpublishPhotoSequenceDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StreetviewpublishPhotoSequenceDeleteResponse>;
    /**
     * streetviewpublishPhotoSequenceGet - Gets the metadata of the specified PhotoSequence via the Operation interface. This method returns the following three types of responses: * `Operation.done` = false, if the processing of PhotoSequence is not finished yet. * `Operation.done` = true and `Operation.error` is populated, if there was an error in processing. * `Operation.done` = true and `Operation.response` is poulated, which contains a PhotoSequence message. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested PhotoSequence. * google.rpc.Code.NOT_FOUND if the requested PhotoSequence does not exist.
    **/
    streetviewpublishPhotoSequenceGet(req: operations.StreetviewpublishPhotoSequenceGetRequest, config?: AxiosRequestConfig): Promise<operations.StreetviewpublishPhotoSequenceGetResponse>;
    /**
     * streetviewpublishPhotoSequenceStartUpload - Creates an upload session to start uploading photo sequence data. The upload URL of the returned UploadRef is used to upload the data for the `photoSequence`. After the upload is complete, the UploadRef is used with CreatePhotoSequence to create the PhotoSequence object entry.
    **/
    streetviewpublishPhotoSequenceStartUpload(req: operations.StreetviewpublishPhotoSequenceStartUploadRequest, config?: AxiosRequestConfig): Promise<operations.StreetviewpublishPhotoSequenceStartUploadResponse>;
}
