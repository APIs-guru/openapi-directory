import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPostsPublishPathParams extends SpeakeasyBase {
    blogId: string;
    postId: string;
}
export declare class BloggerPostsPublishQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    publishDate?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BloggerPostsPublishSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostsPublishRequest extends SpeakeasyBase {
    pathParams: BloggerPostsPublishPathParams;
    queryParams: BloggerPostsPublishQueryParams;
    security: BloggerPostsPublishSecurity;
}
export declare class BloggerPostsPublishResponse extends SpeakeasyBase {
    contentType: string;
    post?: shared.Post;
    statusCode: number;
}
