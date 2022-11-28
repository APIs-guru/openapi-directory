import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesConfigurationAchievementConfigurationsDeletePathParams extends SpeakeasyBase {
    achievementId: string;
}
export declare class GamesConfigurationAchievementConfigurationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class GamesConfigurationAchievementConfigurationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesConfigurationAchievementConfigurationsDeleteRequest extends SpeakeasyBase {
    pathParams: GamesConfigurationAchievementConfigurationsDeletePathParams;
    queryParams: GamesConfigurationAchievementConfigurationsDeleteQueryParams;
    security: GamesConfigurationAchievementConfigurationsDeleteSecurity;
}
export declare class GamesConfigurationAchievementConfigurationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
