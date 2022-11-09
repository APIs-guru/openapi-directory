import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BloggerPostsGetPathParams extends SpeakeasyBase {
    blogId: string;
    postId: string;
}
export declare enum BloggerPostsGetViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare class BloggerPostsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fetchBody?: boolean;
    fetchImages?: boolean;
    fields?: string;
    key?: string;
    maxComments?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: BloggerPostsGetViewEnum;
}
export declare class BloggerPostsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostsGetSecurity extends SpeakeasyBase {
    option1?: BloggerPostsGetSecurityOption1;
    option2?: BloggerPostsGetSecurityOption2;
}
export declare class BloggerPostsGetRequest extends SpeakeasyBase {
    pathParams: BloggerPostsGetPathParams;
    queryParams: BloggerPostsGetQueryParams;
    security: BloggerPostsGetSecurity;
}
export declare class BloggerPostsGetResponse extends SpeakeasyBase {
    contentType: string;
    post?: shared.Post;
    statusCode: number;
}
