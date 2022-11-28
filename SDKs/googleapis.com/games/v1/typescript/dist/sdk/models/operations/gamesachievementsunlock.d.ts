import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesAchievementsUnlockPathParams extends SpeakeasyBase {
    achievementId: string;
}
export declare class GamesAchievementsUnlockQueryParams extends SpeakeasyBase {
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
export declare class GamesAchievementsUnlockSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesAchievementsUnlockRequest extends SpeakeasyBase {
    pathParams: GamesAchievementsUnlockPathParams;
    queryParams: GamesAchievementsUnlockQueryParams;
    security: GamesAchievementsUnlockSecurity;
}
export declare class GamesAchievementsUnlockResponse extends SpeakeasyBase {
    achievementUnlockResponse?: shared.AchievementUnlockResponse;
    contentType: string;
    statusCode: number;
}
