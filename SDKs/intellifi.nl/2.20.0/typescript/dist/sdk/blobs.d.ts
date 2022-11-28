import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Blobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addBlob - Create binary large object (blob) metadata
    **/
    addBlob(req: operations.AddBlobRequest, config?: AxiosRequestConfig): Promise<operations.AddBlobResponse>;
    /**
     * deleteBlob - Delete binary large object (blob)
    **/
    deleteBlob(req: operations.DeleteBlobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBlobResponse>;
    /**
     * getBlobById - Download a binary large object (blob)
    **/
    getBlobById(req: operations.GetBlobByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBlobByIdResponse>;
    /**
     * getBlobMetadataById - Get binary large object (blob)
    **/
    getBlobMetadataById(req: operations.GetBlobMetadataByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBlobMetadataByIdResponse>;
    /**
     * getBlobs - Get all binary large objects (blob)
    **/
    getBlobs(req: operations.GetBlobsRequest, config?: AxiosRequestConfig): Promise<operations.GetBlobsResponse>;
    /**
     * uploadBlobById - Create binary large object (blob)
    **/
    uploadBlobById(req: operations.UploadBlobByIdRequest, config?: AxiosRequestConfig): Promise<operations.UploadBlobByIdResponse>;
}
