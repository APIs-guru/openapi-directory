import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BloggerPostsGetPathParams extends SpeakeasyBase {
    blogId: string;
    postId: string;
}
export declare class BloggerPostsGetQueryParams extends SpeakeasyBase {
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
export declare class BloggerPostsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
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
