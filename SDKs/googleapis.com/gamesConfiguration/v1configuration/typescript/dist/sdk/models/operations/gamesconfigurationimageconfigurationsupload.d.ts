import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GamesConfigurationImageConfigurationsUploadImageTypeEnum {
    ImageTypeUnspecified = "IMAGE_TYPE_UNSPECIFIED",
    AchievementIcon = "ACHIEVEMENT_ICON",
    LeaderboardIcon = "LEADERBOARD_ICON"
}
export declare class GamesConfigurationImageConfigurationsUploadPathParams extends SpeakeasyBase {
    imageType: GamesConfigurationImageConfigurationsUploadImageTypeEnum;
    resourceId: string;
}
export declare class GamesConfigurationImageConfigurationsUploadQueryParams extends SpeakeasyBase {
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
export declare class GamesConfigurationImageConfigurationsUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesConfigurationImageConfigurationsUploadRequest extends SpeakeasyBase {
    pathParams: GamesConfigurationImageConfigurationsUploadPathParams;
    queryParams: GamesConfigurationImageConfigurationsUploadQueryParams;
    security: GamesConfigurationImageConfigurationsUploadSecurity;
}
export declare class GamesConfigurationImageConfigurationsUploadResponse extends SpeakeasyBase {
    contentType: string;
    imageConfiguration?: shared.ImageConfiguration;
    statusCode: number;
}
