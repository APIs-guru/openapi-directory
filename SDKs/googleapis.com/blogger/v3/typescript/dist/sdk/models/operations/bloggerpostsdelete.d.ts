import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPostsDeletePathParams extends SpeakeasyBase {
    blogId: string;
    postId: string;
}
export declare class BloggerPostsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BloggerPostsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostsDeleteRequest extends SpeakeasyBase {
    pathParams: BloggerPostsDeletePathParams;
    queryParams: BloggerPostsDeleteQueryParams;
    security: BloggerPostsDeleteSecurity;
}
export declare class BloggerPostsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
