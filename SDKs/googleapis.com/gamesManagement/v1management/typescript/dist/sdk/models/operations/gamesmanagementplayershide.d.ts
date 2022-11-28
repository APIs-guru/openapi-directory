import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesManagementPlayersHidePathParams extends SpeakeasyBase {
    applicationId: string;
    playerId: string;
}
export declare class GamesManagementPlayersHideQueryParams extends SpeakeasyBase {
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
export declare class GamesManagementPlayersHideSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesManagementPlayersHideRequest extends SpeakeasyBase {
    pathParams: GamesManagementPlayersHidePathParams;
    queryParams: GamesManagementPlayersHideQueryParams;
    security: GamesManagementPlayersHideSecurity;
}
export declare class GamesManagementPlayersHideResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
