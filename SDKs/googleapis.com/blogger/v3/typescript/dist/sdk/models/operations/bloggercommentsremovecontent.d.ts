import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BloggerCommentsRemoveContentPathParams extends SpeakeasyBase {
    blogId: string;
    commentId: string;
    postId: string;
}
export declare class BloggerCommentsRemoveContentQueryParams extends SpeakeasyBase {
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
export declare class BloggerCommentsRemoveContentSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerCommentsRemoveContentRequest extends SpeakeasyBase {
    pathParams: BloggerCommentsRemoveContentPathParams;
    queryParams: BloggerCommentsRemoveContentQueryParams;
    security: BloggerCommentsRemoveContentSecurity;
}
export declare class BloggerCommentsRemoveContentResponse extends SpeakeasyBase {
    comment?: shared.Comment;
    contentType: string;
    statusCode: number;
}
