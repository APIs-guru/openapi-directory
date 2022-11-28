import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PhotoSequences {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * streetviewpublishPhotoSequencesList - Lists all the PhotoSequences that belong to the user, in descending CreatePhotoSequence timestamp order.
    **/
    streetviewpublishPhotoSequencesList(req: operations.StreetviewpublishPhotoSequencesListRequest, config?: AxiosRequestConfig): Promise<operations.StreetviewpublishPhotoSequencesListResponse>;
}
