import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesScoresSubmitMultipleQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    language?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesScoresSubmitMultipleSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesScoresSubmitMultipleRequest extends SpeakeasyBase {
    queryParams: GamesScoresSubmitMultipleQueryParams;
    request?: shared.PlayerScoreSubmissionList;
    security: GamesScoresSubmitMultipleSecurity;
}
export declare class GamesScoresSubmitMultipleResponse extends SpeakeasyBase {
    contentType: string;
    playerScoreListResponse?: shared.PlayerScoreListResponse;
    statusCode: number;
}
