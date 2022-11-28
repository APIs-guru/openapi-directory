import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesConfigurationLeaderboardConfigurationsInsertPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GamesConfigurationLeaderboardConfigurationsInsertQueryParams extends SpeakeasyBase {
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
export declare class GamesConfigurationLeaderboardConfigurationsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesConfigurationLeaderboardConfigurationsInsertRequest extends SpeakeasyBase {
    pathParams: GamesConfigurationLeaderboardConfigurationsInsertPathParams;
    queryParams: GamesConfigurationLeaderboardConfigurationsInsertQueryParams;
    request?: shared.LeaderboardConfiguration;
    security: GamesConfigurationLeaderboardConfigurationsInsertSecurity;
}
export declare class GamesConfigurationLeaderboardConfigurationsInsertResponse extends SpeakeasyBase {
    contentType: string;
    leaderboardConfiguration?: shared.LeaderboardConfiguration;
    statusCode: number;
}
