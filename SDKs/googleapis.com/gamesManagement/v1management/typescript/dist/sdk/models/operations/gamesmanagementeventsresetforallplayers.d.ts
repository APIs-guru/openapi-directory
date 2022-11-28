import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesManagementEventsResetForAllPlayersPathParams extends SpeakeasyBase {
    eventId: string;
}
export declare class GamesManagementEventsResetForAllPlayersQueryParams extends SpeakeasyBase {
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
export declare class GamesManagementEventsResetForAllPlayersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesManagementEventsResetForAllPlayersRequest extends SpeakeasyBase {
    pathParams: GamesManagementEventsResetForAllPlayersPathParams;
    queryParams: GamesManagementEventsResetForAllPlayersQueryParams;
    security: GamesManagementEventsResetForAllPlayersSecurity;
}
export declare class GamesManagementEventsResetForAllPlayersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
