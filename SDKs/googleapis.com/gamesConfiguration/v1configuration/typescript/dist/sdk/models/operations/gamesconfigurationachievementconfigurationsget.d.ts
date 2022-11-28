import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesConfigurationAchievementConfigurationsGetPathParams extends SpeakeasyBase {
    achievementId: string;
}
export declare class GamesConfigurationAchievementConfigurationsGetQueryParams extends SpeakeasyBase {
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
export declare class GamesConfigurationAchievementConfigurationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesConfigurationAchievementConfigurationsGetRequest extends SpeakeasyBase {
    pathParams: GamesConfigurationAchievementConfigurationsGetPathParams;
    queryParams: GamesConfigurationAchievementConfigurationsGetQueryParams;
    security: GamesConfigurationAchievementConfigurationsGetSecurity;
}
export declare class GamesConfigurationAchievementConfigurationsGetResponse extends SpeakeasyBase {
    achievementConfiguration?: shared.AchievementConfiguration;
    contentType: string;
    statusCode: number;
}
