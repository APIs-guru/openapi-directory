import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPostsGetByPathPathParams extends SpeakeasyBase {
    blogId: string;
}
export declare enum BloggerPostsGetByPathViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare class BloggerPostsGetByPathQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxComments?: number;
    oauthToken?: string;
    path: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: BloggerPostsGetByPathViewEnum;
}
export declare class BloggerPostsGetByPathSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostsGetByPathSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostsGetByPathSecurity extends SpeakeasyBase {
    option1?: BloggerPostsGetByPathSecurityOption1;
    option2?: BloggerPostsGetByPathSecurityOption2;
}
export declare class BloggerPostsGetByPathRequest extends SpeakeasyBase {
    pathParams: BloggerPostsGetByPathPathParams;
    queryParams: BloggerPostsGetByPathQueryParams;
    security: BloggerPostsGetByPathSecurity;
}
export declare class BloggerPostsGetByPathResponse extends SpeakeasyBase {
    contentType: string;
    post?: shared.Post;
    statusCode: number;
}
