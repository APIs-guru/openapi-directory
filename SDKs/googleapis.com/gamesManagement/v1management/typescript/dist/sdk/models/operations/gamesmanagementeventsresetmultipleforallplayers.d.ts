import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesManagementEventsResetMultipleForAllPlayersQueryParams extends SpeakeasyBase {
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
export declare class GamesManagementEventsResetMultipleForAllPlayersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesManagementEventsResetMultipleForAllPlayersRequest extends SpeakeasyBase {
    queryParams: GamesManagementEventsResetMultipleForAllPlayersQueryParams;
    request?: shared.EventsResetMultipleForAllRequest;
    security: GamesManagementEventsResetMultipleForAllPlayersSecurity;
}
export declare class GamesManagementEventsResetMultipleForAllPlayersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
