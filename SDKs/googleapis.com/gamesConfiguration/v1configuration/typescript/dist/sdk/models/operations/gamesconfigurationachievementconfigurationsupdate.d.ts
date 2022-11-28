import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesConfigurationAchievementConfigurationsUpdatePathParams extends SpeakeasyBase {
    achievementId: string;
}
export declare class GamesConfigurationAchievementConfigurationsUpdateQueryParams extends SpeakeasyBase {
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
export declare class GamesConfigurationAchievementConfigurationsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesConfigurationAchievementConfigurationsUpdateRequest extends SpeakeasyBase {
    pathParams: GamesConfigurationAchievementConfigurationsUpdatePathParams;
    queryParams: GamesConfigurationAchievementConfigurationsUpdateQueryParams;
    request?: shared.AchievementConfiguration;
    security: GamesConfigurationAchievementConfigurationsUpdateSecurity;
}
export declare class GamesConfigurationAchievementConfigurationsUpdateResponse extends SpeakeasyBase {
    achievementConfiguration?: shared.AchievementConfiguration;
    contentType: string;
    statusCode: number;
}
