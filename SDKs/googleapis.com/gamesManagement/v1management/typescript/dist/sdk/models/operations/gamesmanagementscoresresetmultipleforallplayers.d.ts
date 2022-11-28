import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesManagementScoresResetMultipleForAllPlayersQueryParams extends SpeakeasyBase {
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
export declare class GamesManagementScoresResetMultipleForAllPlayersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesManagementScoresResetMultipleForAllPlayersRequest extends SpeakeasyBase {
    queryParams: GamesManagementScoresResetMultipleForAllPlayersQueryParams;
    request?: shared.ScoresResetMultipleForAllRequest;
    security: GamesManagementScoresResetMultipleForAllPlayersSecurity;
}
export declare class GamesManagementScoresResetMultipleForAllPlayersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
