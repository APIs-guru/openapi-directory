import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Presentations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * slidesPresentationsBatchUpdate - Applies one or more updates to the presentation. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies: the reply to the third request, and another empty reply, in that order. Because other users may be editing the presentation, the presentation might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
    **/
    slidesPresentationsBatchUpdate(req: operations.SlidesPresentationsBatchUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SlidesPresentationsBatchUpdateResponse>;
    /**
     * slidesPresentationsCreate - Creates a blank presentation using the title given in the request. If a `presentationId` is provided, it is used as the ID of the new presentation. Otherwise, a new ID is generated. Other fields in the request, including any provided content, are ignored. Returns the created presentation.
    **/
    slidesPresentationsCreate(req: operations.SlidesPresentationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SlidesPresentationsCreateResponse>;
    /**
     * slidesPresentationsGet - Gets the latest version of the specified presentation.
    **/
    slidesPresentationsGet(req: operations.SlidesPresentationsGetRequest, config?: AxiosRequestConfig): Promise<operations.SlidesPresentationsGetResponse>;
    /**
     * slidesPresentationsPagesGet - Gets the latest version of the specified page in the presentation.
    **/
    slidesPresentationsPagesGet(req: operations.SlidesPresentationsPagesGetRequest, config?: AxiosRequestConfig): Promise<operations.SlidesPresentationsPagesGetResponse>;
    /**
     * slidesPresentationsPagesGetThumbnail - Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image. This request counts as an [expensive read request](/slides/limits) for quota purposes.
    **/
    slidesPresentationsPagesGetThumbnail(req: operations.SlidesPresentationsPagesGetThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.SlidesPresentationsPagesGetThumbnailResponse>;
}
