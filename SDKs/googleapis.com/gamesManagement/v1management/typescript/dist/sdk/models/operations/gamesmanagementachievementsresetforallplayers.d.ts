import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesManagementAchievementsResetForAllPlayersPathParams extends SpeakeasyBase {
    achievementId: string;
}
export declare class GamesManagementAchievementsResetForAllPlayersQueryParams extends SpeakeasyBase {
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
export declare class GamesManagementAchievementsResetForAllPlayersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesManagementAchievementsResetForAllPlayersRequest extends SpeakeasyBase {
    pathParams: GamesManagementAchievementsResetForAllPlayersPathParams;
    queryParams: GamesManagementAchievementsResetForAllPlayersQueryParams;
    security: GamesManagementAchievementsResetForAllPlayersSecurity;
}
export declare class GamesManagementAchievementsResetForAllPlayersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
