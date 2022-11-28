import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesConfigurationLeaderboardConfigurationsGetPathParams extends SpeakeasyBase {
    leaderboardId: string;
}
export declare class GamesConfigurationLeaderboardConfigurationsGetQueryParams extends SpeakeasyBase {
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
export declare class GamesConfigurationLeaderboardConfigurationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesConfigurationLeaderboardConfigurationsGetRequest extends SpeakeasyBase {
    pathParams: GamesConfigurationLeaderboardConfigurationsGetPathParams;
    queryParams: GamesConfigurationLeaderboardConfigurationsGetQueryParams;
    security: GamesConfigurationLeaderboardConfigurationsGetSecurity;
}
export declare class GamesConfigurationLeaderboardConfigurationsGetResponse extends SpeakeasyBase {
    contentType: string;
    leaderboardConfiguration?: shared.LeaderboardConfiguration;
    statusCode: number;
}
