import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BloggerCommentsListPathParams extends SpeakeasyBase {
    blogId: string;
    postId: string;
}
export declare enum BloggerCommentsListStatusEnum {
    Live = "LIVE",
    Emptied = "EMPTIED",
    Pending = "PENDING",
    Spam = "SPAM"
}
export declare enum BloggerCommentsListViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare class BloggerCommentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endDate?: string;
    fetchBodies?: boolean;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startDate?: string;
    status?: BloggerCommentsListStatusEnum;
    uploadType?: string;
    uploadProtocol?: string;
    view?: BloggerCommentsListViewEnum;
}
export declare class BloggerCommentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerCommentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerCommentsListSecurity extends SpeakeasyBase {
    option1?: BloggerCommentsListSecurityOption1;
    option2?: BloggerCommentsListSecurityOption2;
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
