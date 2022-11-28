import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesManagementAchievementsResetAllQueryParams extends SpeakeasyBase {
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
export declare class GamesManagementAchievementsResetAllSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesManagementAchievementsResetAllRequest extends SpeakeasyBase {
    queryParams: GamesManagementAchievementsResetAllQueryParams;
    security: GamesManagementAchievementsResetAllSecurity;
}
export declare class GamesManagementAchievementsResetAllResponse extends SpeakeasyBase {
    achievementResetAllResponse?: shared.AchievementResetAllResponse;
    contentType: string;
    statusCode: number;
}
