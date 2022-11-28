import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesAchievementsListPathParams extends SpeakeasyBase {
    playerId: string;
}
export declare enum GamesAchievementsListStateEnum {
    All = "ALL",
    Hidden = "HIDDEN",
    Revealed = "REVEALED",
    Unlocked = "UNLOCKED"
}
export declare class GamesAchievementsListQueryParams extends SpeakeasyBase {
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
    state?: GamesAchievementsListStateEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesAchievementsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesAchievementsListRequest extends SpeakeasyBase {
    pathParams: GamesAchievementsListPathParams;
    queryParams: GamesAchievementsListQueryParams;
    security: GamesAchievementsListSecurity;
}
export declare class GamesAchievementsListResponse extends SpeakeasyBase {
    contentType: string;
    playerAchievementListResponse?: shared.PlayerAchievementListResponse;
    statusCode: number;
}
