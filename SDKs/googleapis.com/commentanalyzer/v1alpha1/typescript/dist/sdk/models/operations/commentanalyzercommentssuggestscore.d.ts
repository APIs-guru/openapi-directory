import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CommentanalyzerCommentsSuggestscoreQueryParams extends SpeakeasyBase {
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
export declare class CommentanalyzerCommentsSuggestscoreSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CommentanalyzerCommentsSuggestscoreRequest extends SpeakeasyBase {
    queryParams: CommentanalyzerCommentsSuggestscoreQueryParams;
    request?: shared.SuggestCommentScoreRequest;
    security: CommentanalyzerCommentsSuggestscoreSecurity;
}
export declare class CommentanalyzerCommentsSuggestscoreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    suggestCommentScoreResponse?: shared.SuggestCommentScoreResponse;
}
