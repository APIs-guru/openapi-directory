import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Timeline {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mirrorTimelineAttachmentsDelete - Deletes an attachment from a timeline item.
    **/
    mirrorTimelineAttachmentsDelete(req: operations.MirrorTimelineAttachmentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineAttachmentsDeleteResponse>;
    /**
     * mirrorTimelineAttachmentsGet - Retrieves an attachment on a timeline item by item ID and attachment ID.
    **/
    mirrorTimelineAttachmentsGet(req: operations.MirrorTimelineAttachmentsGetRequest, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineAttachmentsGetResponse>;
    /**
     * mirrorTimelineAttachmentsInsert - Adds a new attachment to a timeline item.
    **/
    mirrorTimelineAttachmentsInsert(req: operations.MirrorTimelineAttachmentsInsertRequest, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineAttachmentsInsertResponse>;
    /**
     * mirrorTimelineAttachmentsList - Returns a list of attachments for a timeline item.
    **/
    mirrorTimelineAttachmentsList(req: operations.MirrorTimelineAttachmentsListRequest, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineAttachmentsListResponse>;
    /**
     * mirrorTimelineDelete - Deletes a timeline item.
    **/
    mirrorTimelineDelete(req: operations.MirrorTimelineDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineDeleteResponse>;
    /**
     * mirrorTimelineGet - Gets a single timeline item by ID.
    **/
    mirrorTimelineGet(req: operations.MirrorTimelineGetRequest, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineGetResponse>;
    /**
     * mirrorTimelineInsert - Inserts a new item into the timeline.
    **/
    mirrorTimelineInsert(req: operations.MirrorTimelineInsertRequest, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineInsertResponse>;
    /**
     * mirrorTimelineList - Retrieves a list of timeline items for the authenticated user.
    **/
    mirrorTimelineList(req: operations.MirrorTimelineListRequest, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineListResponse>;
    /**
     * mirrorTimelinePatch - Updates a timeline item in place. This method supports patch semantics.
    **/
    mirrorTimelinePatch(req: operations.MirrorTimelinePatchRequest, config?: AxiosRequestConfig): Promise<operations.MirrorTimelinePatchResponse>;
    /**
     * mirrorTimelineUpdate - Updates a timeline item in place.
    **/
    mirrorTimelineUpdate(req: operations.MirrorTimelineUpdateRequest, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineUpdateResponse>;
}
