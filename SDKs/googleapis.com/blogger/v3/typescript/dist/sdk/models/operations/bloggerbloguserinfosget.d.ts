import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerBlogUserInfosGetPathParams extends SpeakeasyBase {
    blogId: string;
    userId: string;
}
export declare class BloggerBlogUserInfosGetQueryParams extends SpeakeasyBase {
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
}
export declare class BloggerBlogUserInfosGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerBlogUserInfosGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerBlogUserInfosGetSecurity extends SpeakeasyBase {
    option1?: BloggerBlogUserInfosGetSecurityOption1;
    option2?: BloggerBlogUserInfosGetSecurityOption2;
}
export declare class BloggerBlogUserInfosGetRequest extends SpeakeasyBase {
    pathParams: BloggerBlogUserInfosGetPathParams;
    queryParams: BloggerBlogUserInfosGetQueryParams;
    security: BloggerBlogUserInfosGetSecurity;
}
export declare class BloggerBlogUserInfosGetResponse extends SpeakeasyBase {
    blogUserInfo?: shared.BlogUserInfo;
    contentType: string;
    statusCode: number;
}
