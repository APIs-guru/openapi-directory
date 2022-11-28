import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GamesScoresListCollectionEnum {
    ScoreCollectionUnspecified = "SCORE_COLLECTION_UNSPECIFIED",
    Public = "PUBLIC",
    Social = "SOCIAL",
    Friends = "FRIENDS"
}
export declare class GamesScoresListPathParams extends SpeakeasyBase {
    collection: GamesScoresListCollectionEnum;
    leaderboardId: string;
}
export declare enum GamesScoresListTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}
export declare class GamesScoresListQueryParams extends SpeakeasyBase {
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
    timeSpan: GamesScoresListTimeSpanEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesScoresListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesScoresListRequest extends SpeakeasyBase {
    pathParams: GamesScoresListPathParams;
    queryParams: GamesScoresListQueryParams;
    security: GamesScoresListSecurity;
}
export declare class GamesScoresListResponse extends SpeakeasyBase {
    contentType: string;
    leaderboardScores?: shared.LeaderboardScores;
    statusCode: number;
}
