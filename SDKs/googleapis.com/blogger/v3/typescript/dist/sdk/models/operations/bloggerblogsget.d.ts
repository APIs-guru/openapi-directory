import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BloggerBlogsGetPathParams extends SpeakeasyBase {
    blogId: string;
}
export declare enum BloggerBlogsGetViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare class BloggerBlogsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxPosts?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: BloggerBlogsGetViewEnum;
}
export declare class BloggerBlogsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerBlogsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerBlogsGetSecurity extends SpeakeasyBase {
    option1?: BloggerBlogsGetSecurityOption1;
    option2?: BloggerBlogsGetSecurityOption2;
}
export declare class BloggerBlogsGetRequest extends SpeakeasyBase {
    pathParams: BloggerBlogsGetPathParams;
    queryParams: BloggerBlogsGetQueryParams;
    security: BloggerBlogsGetSecurity;
}
export declare class BloggerBlogsGetResponse extends SpeakeasyBase {
    blog?: shared.Blog;
    contentType: string;
    statusCode: number;
}
