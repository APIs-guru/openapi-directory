import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesAchievementsRevealPathParams extends SpeakeasyBase {
    achievementId: string;
}
export declare class GamesAchievementsRevealQueryParams extends SpeakeasyBase {
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
export declare class GamesAchievementsRevealSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesAchievementsRevealRequest extends SpeakeasyBase {
    pathParams: GamesAchievementsRevealPathParams;
    queryParams: GamesAchievementsRevealQueryParams;
    security: GamesAchievementsRevealSecurity;
}
export declare class GamesAchievementsRevealResponse extends SpeakeasyBase {
    achievementRevealResponse?: shared.AchievementRevealResponse;
    contentType: string;
    statusCode: number;
}
