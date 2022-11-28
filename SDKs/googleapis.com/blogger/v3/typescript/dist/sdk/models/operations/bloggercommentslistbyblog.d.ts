import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerCommentsListByBlogPathParams extends SpeakeasyBase {
    blogId: string;
}
export declare enum BloggerCommentsListByBlogStatusEnum {
    Live = "LIVE",
    Emptied = "EMPTIED",
    Pending = "PENDING",
    Spam = "SPAM"
}
export declare class BloggerCommentsListByBlogQueryParams extends SpeakeasyBase {
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
    status?: BloggerCommentsListByBlogStatusEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BloggerCommentsListByBlogSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerCommentsListByBlogSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerCommentsListByBlogSecurity extends SpeakeasyBase {
    option1?: BloggerCommentsListByBlogSecurityOption1;
    option2?: BloggerCommentsListByBlogSecurityOption2;
}
export declare class BloggerCommentsListByBlogRequest extends SpeakeasyBase {
    pathParams: BloggerCommentsListByBlogPathParams;
    queryParams: BloggerCommentsListByBlogQueryParams;
    security: BloggerCommentsListByBlogSecurity;
}
export declare class BloggerCommentsListByBlogResponse extends SpeakeasyBase {
    commentList?: shared.CommentList;
    contentType: string;
    statusCode: number;
}
