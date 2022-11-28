import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesPlayersGetPathParams extends SpeakeasyBase {
    playerId: string;
}
export declare class GamesPlayersGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    language?: string;
    oauthToken?: string;
    playerIdConsistencyToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesPlayersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesPlayersGetRequest extends SpeakeasyBase {
    pathParams: GamesPlayersGetPathParams;
    queryParams: GamesPlayersGetQueryParams;
    security: GamesPlayersGetSecurity;
}
export declare class GamesPlayersGetResponse extends SpeakeasyBase {
    contentType: string;
    player?: shared.Player;
    statusCode: number;
}
