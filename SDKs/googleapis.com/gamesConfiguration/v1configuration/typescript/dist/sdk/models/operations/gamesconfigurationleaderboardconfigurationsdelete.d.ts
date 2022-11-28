import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesConfigurationLeaderboardConfigurationsDeletePathParams extends SpeakeasyBase {
    leaderboardId: string;
}
export declare class GamesConfigurationLeaderboardConfigurationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class GamesConfigurationLeaderboardConfigurationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesConfigurationLeaderboardConfigurationsDeleteRequest extends SpeakeasyBase {
    pathParams: GamesConfigurationLeaderboardConfigurationsDeletePathParams;
    queryParams: GamesConfigurationLeaderboardConfigurationsDeleteQueryParams;
    security: GamesConfigurationLeaderboardConfigurationsDeleteSecurity;
}
export declare class GamesConfigurationLeaderboardConfigurationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
