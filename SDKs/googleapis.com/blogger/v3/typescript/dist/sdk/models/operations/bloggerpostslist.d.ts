import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPostsListPathParams extends SpeakeasyBase {
    blogId: string;
}
export declare enum BloggerPostsListOrderByEnum {
    OrderByUnspecified = "ORDER_BY_UNSPECIFIED",
    Published = "PUBLISHED",
    Updated = "UPDATED"
}
export declare enum BloggerPostsListStatusEnum {
    Live = "LIVE",
    Draft = "DRAFT",
    Scheduled = "SCHEDULED",
    SoftTrashed = "SOFT_TRASHED"
}
export declare enum BloggerPostsListViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare class BloggerPostsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endDate?: string;
    fetchBodies?: boolean;
    fetchImages?: boolean;
    fields?: string;
    key?: string;
    labels?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: BloggerPostsListOrderByEnum;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startDate?: string;
    status?: BloggerPostsListStatusEnum[];
    uploadType?: string;
    uploadProtocol?: string;
    view?: BloggerPostsListViewEnum;
}
export declare class BloggerPostsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostsListSecurity extends SpeakeasyBase {
    option1?: BloggerPostsListSecurityOption1;
    option2?: BloggerPostsListSecurityOption2;
}
export declare class BloggerPostsListRequest extends SpeakeasyBase {
    pathParams: BloggerPostsListPathParams;
    queryParams: BloggerPostsListQueryParams;
    security: BloggerPostsListSecurity;
}
export declare class BloggerPostsListResponse extends SpeakeasyBase {
    contentType: string;
    postList?: shared.PostList;
    statusCode: number;
}
