import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserContentUrlJsonQueryParams extends SpeakeasyBase {
    url?: string;
}
export declare class GetUserContentUrlJsonSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetUserContentUrlJson200ApplicationJsonDebug extends SpeakeasyBase {
    version?: number;
}
export declare class GetUserContentUrlJson200ApplicationJsonResultsComments extends SpeakeasyBase {
    approveDate?: string;
    commentBody?: string;
    commentId?: number;
    commentSequence?: number;
    commentTitle?: string;
    commentType?: string;
    createDate?: string;
    depth?: number;
    editorsSelection?: boolean;
    parentId?: any;
    parentUserDisplayName?: any;
    permId?: string;
    picUrl?: string;
    recommendations?: number;
    recommendedFlag?: any;
    replies?: any[];
    replyCount?: number;
    reportAbuseFlag?: any;
    sharing?: number;
    status?: string;
    timespeople?: number;
    trusted?: number;
    updateDate?: string;
    userDisplayName?: string;
    userId?: number;
    userLocation?: string;
    userTitle?: any;
    userUrl?: any;
}
export declare class GetUserContentUrlJson200ApplicationJsonResults extends SpeakeasyBase {
    apiTimestamp?: string;
    callerId?: any;
    comments?: GetUserContentUrlJson200ApplicationJsonResultsComments[];
    depthLimit?: number;
    filter?: string;
    page?: number;
    replyLimit?: number;
    sort?: string;
    totalCommentsFound?: number;
    totalCommentsReturned?: number;
    totalEditorsSelectionFound?: number;
    totalEditorsSelectionReturned?: number;
    totalParentCommentsFound?: number;
    totalParentCommentsReturned?: number;
    totalRecommendationsFound?: number;
    totalRecommendationsReturned?: number;
    totalReplyCommentsFound?: number;
    totalReplyCommentsReturned?: number;
    totalReporterReplyCommentsFound?: number;
    totalReporterReplyCommentsReturned?: number;
}
export declare class GetUserContentUrlJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    debug?: GetUserContentUrlJson200ApplicationJsonDebug;
    results?: GetUserContentUrlJson200ApplicationJsonResults;
    status?: string;
}
export declare class GetUserContentUrlJsonRequest extends SpeakeasyBase {
    queryParams: GetUserContentUrlJsonQueryParams;
    security: GetUserContentUrlJsonSecurity;
}
export declare class GetUserContentUrlJsonResponse extends SpeakeasyBase {
    contentType: string;
    getUserContentUrlJson200ApplicationJsonObject?: GetUserContentUrlJson200ApplicationJson;
    statusCode: number;
}
