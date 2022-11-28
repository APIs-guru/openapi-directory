import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesAchievementsIncrementPathParams extends SpeakeasyBase {
    achievementId: string;
}
export declare class GamesAchievementsIncrementQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    stepsToIncrement: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesAchievementsIncrementSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesAchievementsIncrementRequest extends SpeakeasyBase {
    pathParams: GamesAchievementsIncrementPathParams;
    queryParams: GamesAchievementsIncrementQueryParams;
    security: GamesAchievementsIncrementSecurity;
}
export declare class GamesAchievementsIncrementResponse extends SpeakeasyBase {
    achievementIncrementResponse?: shared.AchievementIncrementResponse;
    contentType: string;
    statusCode: number;
}
