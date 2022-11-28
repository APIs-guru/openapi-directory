import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GamesPlayersListCollectionEnum {
    Connected = "CONNECTED",
    Visible = "VISIBLE",
    FriendsAll = "FRIENDS_ALL"
}
export declare class GamesPlayersListPathParams extends SpeakeasyBase {
    collection: GamesPlayersListCollectionEnum;
}
export declare class GamesPlayersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    language?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesPlayersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesPlayersListRequest extends SpeakeasyBase {
    pathParams: GamesPlayersListPathParams;
    queryParams: GamesPlayersListQueryParams;
    security: GamesPlayersListSecurity;
}
export declare class GamesPlayersListResponse extends SpeakeasyBase {
    contentType: string;
    playerListResponse?: shared.PlayerListResponse;
    statusCode: number;
}
