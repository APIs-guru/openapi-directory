import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesAchievementsSetStepsAtLeastPathParams extends SpeakeasyBase {
    achievementId: string;
}
export declare class GamesAchievementsSetStepsAtLeastQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    steps: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesAchievementsSetStepsAtLeastSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesAchievementsSetStepsAtLeastRequest extends SpeakeasyBase {
    pathParams: GamesAchievementsSetStepsAtLeastPathParams;
    queryParams: GamesAchievementsSetStepsAtLeastQueryParams;
    security: GamesAchievementsSetStepsAtLeastSecurity;
}
export declare class GamesAchievementsSetStepsAtLeastResponse extends SpeakeasyBase {
    achievementSetStepsAtLeastResponse?: shared.AchievementSetStepsAtLeastResponse;
    contentType: string;
    statusCode: number;
}
