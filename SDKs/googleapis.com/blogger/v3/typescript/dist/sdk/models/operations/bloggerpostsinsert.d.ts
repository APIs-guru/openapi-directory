import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPostsInsertPathParams extends SpeakeasyBase {
    blogId: string;
}
export declare class BloggerPostsInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fetchBody?: boolean;
    fetchImages?: boolean;
    fields?: string;
    isDraft?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BloggerPostsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostsInsertRequest extends SpeakeasyBase {
    pathParams: BloggerPostsInsertPathParams;
    queryParams: BloggerPostsInsertQueryParams;
    request?: shared.Post;
    security: BloggerPostsInsertSecurity;
}
export declare class BloggerPostsInsertResponse extends SpeakeasyBase {
    contentType: string;
    post?: shared.Post;
    statusCode: number;
}
