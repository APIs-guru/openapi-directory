import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPostsUpdatePathParams extends SpeakeasyBase {
    blogId: string;
    postId: string;
}
export declare class BloggerPostsUpdateQueryParams extends SpeakeasyBase {
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
    publish?: boolean;
    quotaUser?: string;
    revert?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BloggerPostsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostsUpdateRequest extends SpeakeasyBase {
    pathParams: BloggerPostsUpdatePathParams;
    queryParams: BloggerPostsUpdateQueryParams;
    request?: shared.Post;
    security: BloggerPostsUpdateSecurity;
}
export declare class BloggerPostsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    post?: shared.Post;
    statusCode: number;
}
