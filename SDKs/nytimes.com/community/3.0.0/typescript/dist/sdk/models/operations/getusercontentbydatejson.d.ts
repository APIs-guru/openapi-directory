import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserContentByDateJsonQueryParams extends SpeakeasyBase {
    date?: string;
}
export declare class GetUserContentByDateJsonSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetUserContentByDateJson200ApplicationJsonDebug extends SpeakeasyBase {
    version?: number;
}
export declare class GetUserContentByDateJson200ApplicationJsonResultsComments extends SpeakeasyBase {
    approveDate?: string;
    assetId?: number;
    assetUrl?: string;
    commentBody?: string;
    commentId?: number;
    commentSequence?: number;
    commentTitle?: string;
    commentType?: string;
    createDate?: string;
    editorsSelection?: number;
    lft?: number;
    parentId?: any;
    recommendationCount?: number;
    replies?: Map<string, any>[];
    replyCount?: number;
    rgt?: number;
    status?: string;
    statusId?: number;
    updateDate?: string;
    userDisplayName?: string;
    userId?: number;
    userLocation?: string;
    userTitle?: string;
    userUrl?: number;
}
export declare class GetUserContentByDateJson200ApplicationJsonResults extends SpeakeasyBase {
    apiTimestamp?: string;
    comments?: GetUserContentByDateJson200ApplicationJsonResultsComments[];
    totalCommentsFound?: number;
    totalCommentsReturned?: number;
}
export declare class GetUserContentByDateJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    debug?: GetUserContentByDateJson200ApplicationJsonDebug;
    results?: GetUserContentByDateJson200ApplicationJsonResults;
    status?: string;
}
export declare class GetUserContentByDateJsonRequest extends SpeakeasyBase {
    queryParams: GetUserContentByDateJsonQueryParams;
    security: GetUserContentByDateJsonSecurity;
}
export declare class GetUserContentByDateJsonResponse extends SpeakeasyBase {
    contentType: string;
    getUserContentByDateJson200ApplicationJsonObject?: GetUserContentByDateJson200ApplicationJson;
    statusCode: number;
}
