import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesManagementAchievementsResetAllForAllPlayersQueryParams extends SpeakeasyBase {
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
export declare class GamesManagementAchievementsResetAllForAllPlayersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesManagementAchievementsResetAllForAllPlayersRequest extends SpeakeasyBase {
    queryParams: GamesManagementAchievementsResetAllForAllPlayersQueryParams;
    security: GamesManagementAchievementsResetAllForAllPlayersSecurity;
}
export declare class GamesManagementAchievementsResetAllForAllPlayersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
