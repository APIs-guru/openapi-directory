import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesEventsListByPlayerQueryParams extends SpeakeasyBase {
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
export declare class GamesEventsListByPlayerSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesEventsListByPlayerRequest extends SpeakeasyBase {
    queryParams: GamesEventsListByPlayerQueryParams;
    security: GamesEventsListByPlayerSecurity;
}
export declare class GamesEventsListByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    playerEventListResponse?: shared.PlayerEventListResponse;
    statusCode: number;
}
