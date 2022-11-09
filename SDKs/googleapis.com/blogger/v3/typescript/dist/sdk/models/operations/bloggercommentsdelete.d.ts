import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BloggerCommentsDeletePathParams extends SpeakeasyBase {
    blogId: string;
    commentId: string;
    postId: string;
}
export declare class BloggerCommentsDeleteQueryParams extends SpeakeasyBase {
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
export declare class BloggerCommentsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerCommentsDeleteRequest extends SpeakeasyBase {
    pathParams: BloggerCommentsDeletePathParams;
    queryParams: BloggerCommentsDeleteQueryParams;
    security: BloggerCommentsDeleteSecurity;
}
export declare class BloggerCommentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
