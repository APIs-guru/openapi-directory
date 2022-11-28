import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesManagementScoresResetForAllPlayersPathParams extends SpeakeasyBase {
    leaderboardId: string;
}
export declare class GamesManagementScoresResetForAllPlayersQueryParams extends SpeakeasyBase {
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
export declare class GamesManagementScoresResetForAllPlayersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesManagementScoresResetForAllPlayersRequest extends SpeakeasyBase {
    pathParams: GamesManagementScoresResetForAllPlayersPathParams;
    queryParams: GamesManagementScoresResetForAllPlayersQueryParams;
    security: GamesManagementScoresResetForAllPlayersSecurity;
}
export declare class GamesManagementScoresResetForAllPlayersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
