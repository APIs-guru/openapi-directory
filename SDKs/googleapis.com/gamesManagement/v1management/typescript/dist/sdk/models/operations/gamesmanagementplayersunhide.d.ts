import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesManagementPlayersUnhidePathParams extends SpeakeasyBase {
    applicationId: string;
    playerId: string;
}
export declare class GamesManagementPlayersUnhideQueryParams extends SpeakeasyBase {
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
export declare class GamesManagementPlayersUnhideSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesManagementPlayersUnhideRequest extends SpeakeasyBase {
    pathParams: GamesManagementPlayersUnhidePathParams;
    queryParams: GamesManagementPlayersUnhideQueryParams;
    security: GamesManagementPlayersUnhideSecurity;
}
export declare class GamesManagementPlayersUnhideResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
