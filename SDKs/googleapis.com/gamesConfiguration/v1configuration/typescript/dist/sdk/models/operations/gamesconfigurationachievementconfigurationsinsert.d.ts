import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesConfigurationAchievementConfigurationsInsertPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GamesConfigurationAchievementConfigurationsInsertQueryParams extends SpeakeasyBase {
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
export declare class GamesConfigurationAchievementConfigurationsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesConfigurationAchievementConfigurationsInsertRequest extends SpeakeasyBase {
    pathParams: GamesConfigurationAchievementConfigurationsInsertPathParams;
    queryParams: GamesConfigurationAchievementConfigurationsInsertQueryParams;
    request?: shared.AchievementConfiguration;
    security: GamesConfigurationAchievementConfigurationsInsertSecurity;
}
export declare class GamesConfigurationAchievementConfigurationsInsertResponse extends SpeakeasyBase {
    achievementConfiguration?: shared.AchievementConfiguration;
    contentType: string;
    statusCode: number;
}
