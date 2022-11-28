import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Captions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeCaptionsDelete - Deletes a resource.
    **/
    youtubeCaptionsDelete(req: operations.YoutubeCaptionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeCaptionsDeleteResponse>;
    /**
     * youtubeCaptionsDownload - Downloads a caption track.
    **/
    youtubeCaptionsDownload(req: operations.YoutubeCaptionsDownloadRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeCaptionsDownloadResponse>;
    /**
     * youtubeCaptionsInsert - Inserts a new resource into this collection.
    **/
    youtubeCaptionsInsert(req: operations.YoutubeCaptionsInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeCaptionsInsertResponse>;
    /**
     * youtubeCaptionsList - Retrieves a list of resources, possibly filtered.
    **/
    youtubeCaptionsList(req: operations.YoutubeCaptionsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeCaptionsListResponse>;
    /**
     * youtubeCaptionsUpdate - Updates an existing resource.
    **/
    youtubeCaptionsUpdate(req: operations.YoutubeCaptionsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeCaptionsUpdateResponse>;
}
