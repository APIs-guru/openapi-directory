import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BloggerBlogsListByUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum BloggerBlogsListByUserRoleEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare enum BloggerBlogsListByUserStatusEnum {
    Live = "LIVE",
    Deleted = "DELETED"
}
export declare enum BloggerBlogsListByUserViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare class BloggerBlogsListByUserQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fetchUserInfo?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    role?: BloggerBlogsListByUserRoleEnum[];
    status?: BloggerBlogsListByUserStatusEnum[];
    uploadType?: string;
    uploadProtocol?: string;
    view?: BloggerBlogsListByUserViewEnum;
}
export declare class BloggerBlogsListByUserSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerBlogsListByUserSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerBlogsListByUserSecurity extends SpeakeasyBase {
    option1?: BloggerBlogsListByUserSecurityOption1;
    option2?: BloggerBlogsListByUserSecurityOption2;
}
export declare class BloggerBlogsListByUserRequest extends SpeakeasyBase {
    pathParams: BloggerBlogsListByUserPathParams;
    queryParams: BloggerBlogsListByUserQueryParams;
    security: BloggerBlogsListByUserSecurity;
}
export declare class BloggerBlogsListByUserResponse extends SpeakeasyBase {
    blogList?: shared.BlogList;
    contentType: string;
    statusCode: number;
}
