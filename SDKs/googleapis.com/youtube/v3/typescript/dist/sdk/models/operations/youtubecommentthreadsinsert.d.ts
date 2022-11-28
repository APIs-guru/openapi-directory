import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeCommentThreadsInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeCommentThreadsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeCommentThreadsInsertRequest extends SpeakeasyBase {
    queryParams: YoutubeCommentThreadsInsertQueryParams;
    request?: shared.CommentThread;
    security: YoutubeCommentThreadsInsertSecurity;
}
export declare class YoutubeCommentThreadsInsertResponse extends SpeakeasyBase {
    commentThread?: shared.CommentThread;
    contentType: string;
    statusCode: number;
}
