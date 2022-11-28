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
     * firebasestorageProjectsBucketsAddFirebase - Links a Google Cloud Storage bucket to a Firebase project.
    **/
    firebasestorageProjectsBucketsAddFirebase(req: operations.FirebasestorageProjectsBucketsAddFirebaseRequest, config?: AxiosRequestConfig): Promise<operations.FirebasestorageProjectsBucketsAddFirebaseResponse>;
    /**
     * firebasestorageProjectsBucketsGet - Gets a single linked storage bucket.
    **/
    firebasestorageProjectsBucketsGet(req: operations.FirebasestorageProjectsBucketsGetRequest, config?: AxiosRequestConfig): Promise<operations.FirebasestorageProjectsBucketsGetResponse>;
    /**
     * firebasestorageProjectsBucketsList - Lists the linked storage buckets for a project.
    **/
    firebasestorageProjectsBucketsList(req: operations.FirebasestorageProjectsBucketsListRequest, config?: AxiosRequestConfig): Promise<operations.FirebasestorageProjectsBucketsListResponse>;
    /**
     * firebasestorageProjectsBucketsRemoveFirebase - Unlinks a linked Google Cloud Storage bucket from a Firebase project.
    **/
    firebasestorageProjectsBucketsRemoveFirebase(req: operations.FirebasestorageProjectsBucketsRemoveFirebaseRequest, config?: AxiosRequestConfig): Promise<operations.FirebasestorageProjectsBucketsRemoveFirebaseResponse>;
}
