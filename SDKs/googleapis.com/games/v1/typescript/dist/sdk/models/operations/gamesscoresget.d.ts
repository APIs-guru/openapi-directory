import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GamesScoresGetTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    All = "ALL",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}
export declare class GamesScoresGetPathParams extends SpeakeasyBase {
    leaderboardId: string;
    playerId: string;
    timeSpan: GamesScoresGetTimeSpanEnum;
}
export declare enum GamesScoresGetIncludeRankTypeEnum {
    IncludeRankTypeUnspecified = "INCLUDE_RANK_TYPE_UNSPECIFIED",
    All = "ALL",
    Public = "PUBLIC",
    Social = "SOCIAL",
    Friends = "FRIENDS"
}
export declare class GamesScoresGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includeRankType?: GamesScoresGetIncludeRankTypeEnum;
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
export declare class GamesScoresGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesScoresGetRequest extends SpeakeasyBase {
    pathParams: GamesScoresGetPathParams;
    queryParams: GamesScoresGetQueryParams;
    security: GamesScoresGetSecurity;
}
export declare class GamesScoresGetResponse extends SpeakeasyBase {
    contentType: string;
    playerLeaderboardScoreListResponse?: shared.PlayerLeaderboardScoreListResponse;
    statusCode: number;
}
