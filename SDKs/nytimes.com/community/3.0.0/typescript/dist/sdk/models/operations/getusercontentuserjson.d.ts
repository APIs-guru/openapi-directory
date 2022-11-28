import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserContentUserJsonQueryParams extends SpeakeasyBase {
    userId?: number;
}
export declare class GetUserContentUserJsonSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetUserContentUserJson200ApplicationJsonDebug extends SpeakeasyBase {
    version?: number;
}
export declare class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties extends SpeakeasyBase {
    description?: string;
    name?: string;
    properties?: Map<string, any>[];
}
export declare class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels extends SpeakeasyBase {
    labelId?: number;
    labelName?: string;
}
export declare class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff extends SpeakeasyBase {
    groupId?: number;
    taxonomyId?: number;
}
export declare class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc extends SpeakeasyBase {
    groupId?: number;
    taxonomyId?: number;
}
export declare class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn extends SpeakeasyBase {
    groupId?: number;
    taxonomyId?: number;
}
export declare class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties extends SpeakeasyBase {
    automoderationOff?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff;
    commentListSortApprovedateDesc?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc;
    reachedMaxComOn?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn;
}
export declare class GetUserContentUserJson200ApplicationJsonResultsCommentsAsset extends SpeakeasyBase {
    allProperties?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties[];
    assetId?: number;
    assetTitle?: string;
    assetUrl?: string;
    createDate?: string;
    labels?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels[];
    properties?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties;
    source?: string;
    taxonomy?: string;
    text?: Map<string, any>[];
    updateDate?: string;
    vendorId?: string;
}
export declare class GetUserContentUserJson200ApplicationJsonResultsComments extends SpeakeasyBase {
    approveDate?: string;
    asset?: GetUserContentUserJson200ApplicationJsonResultsCommentsAsset;
    commentBody?: string;
    commentId?: number;
    commentSequence?: number;
    commentTitle?: string;
    commentType?: string;
    createDate?: string;
    editorsSelection?: boolean;
    labels?: Map<string, any>[];
    parentId?: any;
    permid?: number;
    picUrl?: string;
    recommendations?: number;
    replies?: Map<string, any>[];
    replyCount?: number;
    status?: string;
    updateDate?: string;
    userDisplayName?: any;
    userId?: number;
    userLocation?: any;
    userSubmittedDisplayName?: string;
    userSubmittedLocation?: string;
    userSubmittedTitle?: any;
    userSubmittedUrl?: any;
    userTitle?: any;
    userUrl?: any;
}
export declare class GetUserContentUserJson200ApplicationJsonResults extends SpeakeasyBase {
    apiTimestamp?: string;
    comments?: GetUserContentUserJson200ApplicationJsonResultsComments[];
    totalCommentsFound?: number;
    totalCommentsReturned?: number;
}
export declare class GetUserContentUserJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    debug?: GetUserContentUserJson200ApplicationJsonDebug;
    results?: GetUserContentUserJson200ApplicationJsonResults;
    status?: string;
}
export declare class GetUserContentUserJsonRequest extends SpeakeasyBase {
    queryParams: GetUserContentUserJsonQueryParams;
    security: GetUserContentUserJsonSecurity;
}
export declare class GetUserContentUserJsonResponse extends SpeakeasyBase {
    contentType: string;
    getUserContentUserJson200ApplicationJsonObject?: GetUserContentUserJson200ApplicationJson;
    statusCode: number;
}
