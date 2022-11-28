import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesAchievementDefinitionsListQueryParams extends SpeakeasyBase {
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
export declare class GamesAchievementDefinitionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesAchievementDefinitionsListRequest extends SpeakeasyBase {
    queryParams: GamesAchievementDefinitionsListQueryParams;
    security: GamesAchievementDefinitionsListSecurity;
}
export declare class GamesAchievementDefinitionsListResponse extends SpeakeasyBase {
    achievementDefinitionsListResponse?: shared.AchievementDefinitionsListResponse;
    contentType: string;
    statusCode: number;
}
