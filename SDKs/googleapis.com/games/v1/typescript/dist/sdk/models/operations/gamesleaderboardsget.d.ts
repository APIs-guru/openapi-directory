import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesLeaderboardsGetPathParams extends SpeakeasyBase {
    leaderboardId: string;
}
export declare class GamesLeaderboardsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    language?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesLeaderboardsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesLeaderboardsGetRequest extends SpeakeasyBase {
    pathParams: GamesLeaderboardsGetPathParams;
    queryParams: GamesLeaderboardsGetQueryParams;
    security: GamesLeaderboardsGetSecurity;
}
export declare class GamesLeaderboardsGetResponse extends SpeakeasyBase {
    contentType: string;
    leaderboard?: shared.Leaderboard;
    statusCode: number;
}
