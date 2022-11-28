import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesManagementAchievementsResetMultipleForAllPlayersQueryParams extends SpeakeasyBase {
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
export declare class GamesManagementAchievementsResetMultipleForAllPlayersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesManagementAchievementsResetMultipleForAllPlayersRequest extends SpeakeasyBase {
    queryParams: GamesManagementAchievementsResetMultipleForAllPlayersQueryParams;
    request?: shared.AchievementResetMultipleForAllRequest;
    security: GamesManagementAchievementsResetMultipleForAllPlayersSecurity;
}
export declare class GamesManagementAchievementsResetMultipleForAllPlayersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
