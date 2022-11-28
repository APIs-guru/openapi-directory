import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesAchievementsUpdateMultipleQueryParams extends SpeakeasyBase {
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
export declare class GamesAchievementsUpdateMultipleSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesAchievementsUpdateMultipleRequest extends SpeakeasyBase {
    queryParams: GamesAchievementsUpdateMultipleQueryParams;
    request?: shared.AchievementUpdateMultipleRequest;
    security: GamesAchievementsUpdateMultipleSecurity;
}
export declare class GamesAchievementsUpdateMultipleResponse extends SpeakeasyBase {
    achievementUpdateMultipleResponse?: shared.AchievementUpdateMultipleResponse;
    contentType: string;
    statusCode: number;
}
