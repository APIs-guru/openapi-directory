import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GamesScoresListWindowCollectionEnum {
    ScoreCollectionUnspecified = "SCORE_COLLECTION_UNSPECIFIED",
    Public = "PUBLIC",
    Social = "SOCIAL",
    Friends = "FRIENDS"
}
export declare class GamesScoresListWindowPathParams extends SpeakeasyBase {
    collection: GamesScoresListWindowCollectionEnum;
    leaderboardId: string;
}
export declare enum GamesScoresListWindowTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}
export declare class GamesScoresListWindowQueryParams extends SpeakeasyBase {
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
    resultsAbove?: number;
    returnTopIfAbsent?: boolean;
    timeSpan: GamesScoresListWindowTimeSpanEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesScoresListWindowSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesScoresListWindowRequest extends SpeakeasyBase {
    pathParams: GamesScoresListWindowPathParams;
    queryParams: GamesScoresListWindowQueryParams;
    security: GamesScoresListWindowSecurity;
}
export declare class GamesScoresListWindowResponse extends SpeakeasyBase {
    contentType: string;
    leaderboardScores?: shared.LeaderboardScores;
    statusCode: number;
}
