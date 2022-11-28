import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesLeaderboardsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    language?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesLeaderboardsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesLeaderboardsListRequest extends SpeakeasyBase {
    queryParams: GamesLeaderboardsListQueryParams;
    security: GamesLeaderboardsListSecurity;
}
export declare class GamesLeaderboardsListResponse extends SpeakeasyBase {
    contentType: string;
    leaderboardListResponse?: shared.LeaderboardListResponse;
    statusCode: number;
}
