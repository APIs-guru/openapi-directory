import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserContentRecentJsonSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetUserContentRecentJson200ApplicationJsonDebug extends SpeakeasyBase {
    version?: number;
}
export declare class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties extends SpeakeasyBase {
    description?: string;
    name?: string;
    properties?: Map<string, any>[];
}
export declare class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn extends SpeakeasyBase {
    groupId?: number;
    taxonomyId?: number;
}
export declare class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors extends SpeakeasyBase {
    groupId?: number;
    taxonomyId?: number;
}
export declare class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff extends SpeakeasyBase {
    groupId?: number;
    taxonomyId?: number;
}
export declare class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties extends SpeakeasyBase {
    automoderationOn?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn;
    commentListSortEditors?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors;
    reachedMaxComOff?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff;
}
export declare class GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset extends SpeakeasyBase {
    allProperties?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties[];
    assetId?: number;
    assetTitle?: string;
    assetUrl?: string;
    createDate?: string;
    labels?: Map<string, any>[];
    properties?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties;
    source?: string;
    taxonomy?: string;
    text?: Map<string, any>[];
    updateDate?: string;
    vendorId?: string;
}
export declare class GetUserContentRecentJson200ApplicationJsonResultsComments extends SpeakeasyBase {
    approveDate?: string;
    asset?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset;
    assetId?: number;
    commentBody?: string;
    commentId?: number;
    commentSequence?: number;
    commentTitle?: string;
    commentType?: string;
    createDate?: string;
    displayName?: string;
    editorsSelection?: number;
    location?: string;
    parentId?: any;
    recommendationCount?: number;
    replies?: Map<string, any>[];
    status?: string;
    statusId?: number;
    updateDate?: string;
    userDisplayName?: string;
    userId?: number;
    userLocation?: string;
    userTitle?: string;
    userUrl?: string;
}
export declare class GetUserContentRecentJson200ApplicationJsonResults extends SpeakeasyBase {
    apiTimestamp?: string;
    comments?: GetUserContentRecentJson200ApplicationJsonResultsComments[];
    totalCommentsReturned?: number;
}
export declare class GetUserContentRecentJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    debug?: GetUserContentRecentJson200ApplicationJsonDebug;
    results?: GetUserContentRecentJson200ApplicationJsonResults;
    status?: string;
}
export declare class GetUserContentRecentJsonRequest extends SpeakeasyBase {
    security: GetUserContentRecentJsonSecurity;
}
export declare class GetUserContentRecentJsonResponse extends SpeakeasyBase {
    contentType: string;
    getUserContentRecentJson200ApplicationJsonObject?: GetUserContentRecentJson200ApplicationJson;
    statusCode: number;
}
