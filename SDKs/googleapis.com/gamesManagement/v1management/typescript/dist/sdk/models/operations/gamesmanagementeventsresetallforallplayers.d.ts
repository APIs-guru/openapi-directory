import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesManagementEventsResetAllForAllPlayersQueryParams extends SpeakeasyBase {
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
export declare class GamesManagementEventsResetAllForAllPlayersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesManagementEventsResetAllForAllPlayersRequest extends SpeakeasyBase {
    queryParams: GamesManagementEventsResetAllForAllPlayersQueryParams;
    security: GamesManagementEventsResetAllForAllPlayersSecurity;
}
export declare class GamesManagementEventsResetAllForAllPlayersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
