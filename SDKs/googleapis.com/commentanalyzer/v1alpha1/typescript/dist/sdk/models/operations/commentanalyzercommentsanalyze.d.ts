import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CommentanalyzerCommentsAnalyzeQueryParams extends SpeakeasyBase {
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
export declare class CommentanalyzerCommentsAnalyzeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CommentanalyzerCommentsAnalyzeRequest extends SpeakeasyBase {
    queryParams: CommentanalyzerCommentsAnalyzeQueryParams;
    request?: shared.AnalyzeCommentRequest;
    security: CommentanalyzerCommentsAnalyzeSecurity;
}
export declare class CommentanalyzerCommentsAnalyzeResponse extends SpeakeasyBase {
    analyzeCommentResponse?: shared.AnalyzeCommentResponse;
    contentType: string;
    statusCode: number;
}
