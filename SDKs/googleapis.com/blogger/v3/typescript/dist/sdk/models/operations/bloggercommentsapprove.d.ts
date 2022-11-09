import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BloggerCommentsApprovePathParams extends SpeakeasyBase {
    blogId: string;
    commentId: string;
    postId: string;
}
export declare class BloggerCommentsApproveQueryParams extends SpeakeasyBase {
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
export declare class BloggerCommentsApproveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BloggerCommentsApproveRequest extends SpeakeasyBase {
    pathParams: BloggerCommentsApprovePathParams;
    queryParams: BloggerCommentsApproveQueryParams;
    security: BloggerCommentsApproveSecurity;
}
export declare class BloggerCommentsApproveResponse extends SpeakeasyBase {
    comment?: shared.Comment;
    contentType: string;
    statusCode: number;
}
