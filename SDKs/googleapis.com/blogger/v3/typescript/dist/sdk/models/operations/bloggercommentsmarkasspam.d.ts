import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BloggerCommentsMarkAsSpamPathParams extends SpeakeasyBase {
    blogId: string;
    commentId: string;
    postId: string;
}
export declare class BloggerCommentsMarkAsSpamQueryParams extends SpeakeasyBase {
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
export declare class BloggerCommentsMarkAsSpamSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerCommentsMarkAsSpamRequest extends SpeakeasyBase {
    pathParams: BloggerCommentsMarkAsSpamPathParams;
    queryParams: BloggerCommentsMarkAsSpamQueryParams;
    security: BloggerCommentsMarkAsSpamSecurity;
}
export declare class BloggerCommentsMarkAsSpamResponse extends SpeakeasyBase {
    comment?: shared.Comment;
    contentType: string;
    statusCode: number;
}
