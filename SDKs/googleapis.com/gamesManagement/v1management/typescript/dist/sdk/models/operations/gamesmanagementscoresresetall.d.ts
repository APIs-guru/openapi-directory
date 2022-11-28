import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesManagementScoresResetAllQueryParams extends SpeakeasyBase {
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
export declare class GamesManagementScoresResetAllSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesManagementScoresResetAllRequest extends SpeakeasyBase {
    queryParams: GamesManagementScoresResetAllQueryParams;
    security: GamesManagementScoresResetAllSecurity;
}
export declare class GamesManagementScoresResetAllResponse extends SpeakeasyBase {
    contentType: string;
    playerScoreResetAllResponse?: shared.PlayerScoreResetAllResponse;
    statusCode: number;
}
