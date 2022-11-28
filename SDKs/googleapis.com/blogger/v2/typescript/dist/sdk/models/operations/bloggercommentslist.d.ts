import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerCommentsListPathParams extends SpeakeasyBase {
    blogId: string;
    postId: string;
}
export declare class BloggerCommentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fetchBodies?: boolean;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startDate?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BloggerCommentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerCommentsListRequest extends SpeakeasyBase {
    pathParams: BloggerCommentsListPathParams;
    queryParams: BloggerCommentsListQueryParams;
    security: BloggerCommentsListSecurity;
}
export declare class BloggerCommentsListResponse extends SpeakeasyBase {
    commentList?: shared.CommentList;
    contentType: string;
    statusCode: number;
}
