import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPostsRevertPathParams extends SpeakeasyBase {
    blogId: string;
    postId: string;
}
export declare class BloggerPostsRevertQueryParams extends SpeakeasyBase {
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
export declare class BloggerPostsRevertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostsRevertRequest extends SpeakeasyBase {
    pathParams: BloggerPostsRevertPathParams;
    queryParams: BloggerPostsRevertQueryParams;
    security: BloggerPostsRevertSecurity;
}
export declare class BloggerPostsRevertResponse extends SpeakeasyBase {
    contentType: string;
    post?: shared.Post;
    statusCode: number;
}
