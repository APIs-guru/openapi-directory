import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesConfigurationLeaderboardConfigurationsUpdatePathParams extends SpeakeasyBase {
    leaderboardId: string;
}
export declare class GamesConfigurationLeaderboardConfigurationsUpdateQueryParams extends SpeakeasyBase {
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
export declare class GamesConfigurationLeaderboardConfigurationsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesConfigurationLeaderboardConfigurationsUpdateRequest extends SpeakeasyBase {
    pathParams: GamesConfigurationLeaderboardConfigurationsUpdatePathParams;
    queryParams: GamesConfigurationLeaderboardConfigurationsUpdateQueryParams;
    request?: shared.LeaderboardConfiguration;
    security: GamesConfigurationLeaderboardConfigurationsUpdateSecurity;
}
export declare class GamesConfigurationLeaderboardConfigurationsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    leaderboardConfiguration?: shared.LeaderboardConfiguration;
    statusCode: number;
}
