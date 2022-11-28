import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesManagementScoresResetPathParams extends SpeakeasyBase {
    leaderboardId: string;
}
export declare class GamesManagementScoresResetQueryParams extends SpeakeasyBase {
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
export declare class GamesManagementScoresResetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesManagementScoresResetRequest extends SpeakeasyBase {
    pathParams: GamesManagementScoresResetPathParams;
    queryParams: GamesManagementScoresResetQueryParams;
    security: GamesManagementScoresResetSecurity;
}
export declare class GamesManagementScoresResetResponse extends SpeakeasyBase {
    contentType: string;
    playerScoreResetResponse?: shared.PlayerScoreResetResponse;
    statusCode: number;
}
