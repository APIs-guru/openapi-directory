import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesManagementAchievementsResetPathParams extends SpeakeasyBase {
    achievementId: string;
}
export declare class GamesManagementAchievementsResetQueryParams extends SpeakeasyBase {
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
export declare class GamesManagementAchievementsResetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesManagementAchievementsResetRequest extends SpeakeasyBase {
    pathParams: GamesManagementAchievementsResetPathParams;
    queryParams: GamesManagementAchievementsResetQueryParams;
    security: GamesManagementAchievementsResetSecurity;
}
export declare class GamesManagementAchievementsResetResponse extends SpeakeasyBase {
    achievementResetResponse?: shared.AchievementResetResponse;
    contentType: string;
    statusCode: number;
}
