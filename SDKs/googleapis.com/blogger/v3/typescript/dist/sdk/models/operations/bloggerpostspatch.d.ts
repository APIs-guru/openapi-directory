import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BloggerPostsPatchPathParams extends SpeakeasyBase {
    blogId: string;
    postId: string;
}
export declare class BloggerPostsPatchQueryParams extends SpeakeasyBase {
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
export declare class BloggerPostsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerPostsPatchRequest extends SpeakeasyBase {
    pathParams: BloggerPostsPatchPathParams;
    queryParams: BloggerPostsPatchQueryParams;
    request?: shared.Post;
    security: BloggerPostsPatchSecurity;
}
export declare class BloggerPostsPatchResponse extends SpeakeasyBase {
    contentType: string;
    post?: shared.Post;
    statusCode: number;
}
