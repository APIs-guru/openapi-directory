import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesConfigurationAchievementConfigurationsListPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GamesConfigurationAchievementConfigurationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesConfigurationAchievementConfigurationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesConfigurationAchievementConfigurationsListRequest extends SpeakeasyBase {
    pathParams: GamesConfigurationAchievementConfigurationsListPathParams;
    queryParams: GamesConfigurationAchievementConfigurationsListQueryParams;
    security: GamesConfigurationAchievementConfigurationsListSecurity;
}
export declare class GamesConfigurationAchievementConfigurationsListResponse extends SpeakeasyBase {
    achievementConfigurationListResponse?: shared.AchievementConfigurationListResponse;
    contentType: string;
    statusCode: number;
}
