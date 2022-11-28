import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPostUserInfosListPathParams extends SpeakeasyBase {
    blogId: string;
    userId: string;
}
export declare enum BloggerPostUserInfosListOrderByEnum {
    OrderByUnspecified = "ORDER_BY_UNSPECIFIED",
    Published = "PUBLISHED",
    Updated = "UPDATED"
}
export declare enum BloggerPostUserInfosListStatusEnum {
    Live = "LIVE",
    Draft = "DRAFT",
    Scheduled = "SCHEDULED",
    SoftTrashed = "SOFT_TRASHED"
}
export declare enum BloggerPostUserInfosListViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare class BloggerPostUserInfosListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endDate?: string;
    fetchBodies?: boolean;
    fields?: string;
    key?: string;
    labels?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: BloggerPostUserInfosListOrderByEnum;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startDate?: string;
    status?: BloggerPostUserInfosListStatusEnum[];
    uploadType?: string;
    uploadProtocol?: string;
    view?: BloggerPostUserInfosListViewEnum;
}
export declare class BloggerPostUserInfosListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostUserInfosListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostUserInfosListSecurity extends SpeakeasyBase {
    option1?: BloggerPostUserInfosListSecurityOption1;
    option2?: BloggerPostUserInfosListSecurityOption2;
}
export declare class BloggerPostUserInfosListRequest extends SpeakeasyBase {
    pathParams: BloggerPostUserInfosListPathParams;
    queryParams: BloggerPostUserInfosListQueryParams;
    security: BloggerPostUserInfosListSecurity;
}
export declare class BloggerPostUserInfosListResponse extends SpeakeasyBase {
    contentType: string;
    postUserInfosList?: shared.PostUserInfosList;
    statusCode: number;
}
