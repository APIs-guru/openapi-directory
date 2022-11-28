import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesConfigurationLeaderboardConfigurationsListPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GamesConfigurationLeaderboardConfigurationsListQueryParams extends SpeakeasyBase {
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
export declare class GamesConfigurationLeaderboardConfigurationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesConfigurationLeaderboardConfigurationsListRequest extends SpeakeasyBase {
    pathParams: GamesConfigurationLeaderboardConfigurationsListPathParams;
    queryParams: GamesConfigurationLeaderboardConfigurationsListQueryParams;
    security: GamesConfigurationLeaderboardConfigurationsListSecurity;
}
export declare class GamesConfigurationLeaderboardConfigurationsListResponse extends SpeakeasyBase {
    contentType: string;
    leaderboardConfigurationListResponse?: shared.LeaderboardConfigurationListResponse;
    statusCode: number;
}
