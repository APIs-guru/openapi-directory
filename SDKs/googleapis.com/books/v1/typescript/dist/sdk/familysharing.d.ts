import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Familysharing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * booksFamilysharingGetFamilyInfo - Gets information regarding the family that the user is part of.
    **/
    booksFamilysharingGetFamilyInfo(req: operations.BooksFamilysharingGetFamilyInfoRequest, config?: AxiosRequestConfig): Promise<operations.BooksFamilysharingGetFamilyInfoResponse>;
    /**
     * booksFamilysharingShare - Initiates sharing of the content with the user's family. Empty response indicates success.
    **/
    booksFamilysharingShare(req: operations.BooksFamilysharingShareRequest, config?: AxiosRequestConfig): Promise<operations.BooksFamilysharingShareResponse>;
    /**
     * booksFamilysharingUnshare - Initiates revoking content that has already been shared with the user's family. Empty response indicates success.
    **/
    booksFamilysharingUnshare(req: operations.BooksFamilysharingUnshareRequest, config?: AxiosRequestConfig): Promise<operations.BooksFamilysharingUnshareResponse>;
}
