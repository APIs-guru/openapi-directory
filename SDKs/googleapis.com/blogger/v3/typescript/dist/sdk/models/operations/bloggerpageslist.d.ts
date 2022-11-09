import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BloggerPagesListPathParams extends SpeakeasyBase {
    blogId: string;
}
export declare enum BloggerPagesListStatusEnum {
    Live = "LIVE",
    Draft = "DRAFT",
    SoftTrashed = "SOFT_TRASHED"
}
export declare enum BloggerPagesListViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare class BloggerPagesListQueryParams extends SpeakeasyBase {
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
    status?: BloggerPagesListStatusEnum[];
    uploadType?: string;
    uploadProtocol?: string;
    view?: BloggerPagesListViewEnum;
}
export declare class BloggerPagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPagesListSecurity extends SpeakeasyBase {
    option1?: BloggerPagesListSecurityOption1;
    option2?: BloggerPagesListSecurityOption2;
}
export declare class BloggerPagesListRequest extends SpeakeasyBase {
    pathParams: BloggerPagesListPathParams;
    queryParams: BloggerPagesListQueryParams;
    security: BloggerPagesListSecurity;
}
export declare class BloggerPagesListResponse extends SpeakeasyBase {
    contentType: string;
    pageList?: shared.PageList;
    statusCode: number;
}
