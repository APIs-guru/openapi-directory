import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubePlaylistItemsInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubePlaylistItemsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistItemsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistItemsInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistItemsInsertSecurity extends SpeakeasyBase {
    option1?: YoutubePlaylistItemsInsertSecurityOption1;
    option2?: YoutubePlaylistItemsInsertSecurityOption2;
    option3?: YoutubePlaylistItemsInsertSecurityOption3;
}
export declare class YoutubePlaylistItemsInsertRequest extends SpeakeasyBase {
    queryParams: YoutubePlaylistItemsInsertQueryParams;
    request?: shared.PlaylistItem;
    security: YoutubePlaylistItemsInsertSecurity;
}
export declare class YoutubePlaylistItemsInsertResponse extends SpeakeasyBase {
    contentType: string;
    playlistItem?: shared.PlaylistItem;
    statusCode: number;
}
