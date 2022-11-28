import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesPlayersGetScopedPlayerIdsQueryParams extends SpeakeasyBase {
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
export declare class GamesPlayersGetScopedPlayerIdsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesPlayersGetScopedPlayerIdsRequest extends SpeakeasyBase {
    queryParams: GamesPlayersGetScopedPlayerIdsQueryParams;
    security: GamesPlayersGetScopedPlayerIdsSecurity;
}
export declare class GamesPlayersGetScopedPlayerIdsResponse extends SpeakeasyBase {
    contentType: string;
    scopedPlayerIds?: shared.ScopedPlayerIds;
    statusCode: number;
}
