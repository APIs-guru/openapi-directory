import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesScoresSubmitPathParams extends SpeakeasyBase {
    leaderboardId: string;
}
export declare class GamesScoresSubmitQueryParams extends SpeakeasyBase {
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
    score: string;
    scoreTag?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesScoresSubmitSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesScoresSubmitRequest extends SpeakeasyBase {
    pathParams: GamesScoresSubmitPathParams;
    queryParams: GamesScoresSubmitQueryParams;
    security: GamesScoresSubmitSecurity;
}
export declare class GamesScoresSubmitResponse extends SpeakeasyBase {
    contentType: string;
    playerScoreResponse?: shared.PlayerScoreResponse;
    statusCode: number;
}
