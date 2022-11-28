import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubePlaylistItemsUpdateQueryParams extends SpeakeasyBase {
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
export declare class YoutubePlaylistItemsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistItemsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistItemsUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistItemsUpdateSecurity extends SpeakeasyBase {
    option1?: YoutubePlaylistItemsUpdateSecurityOption1;
    option2?: YoutubePlaylistItemsUpdateSecurityOption2;
    option3?: YoutubePlaylistItemsUpdateSecurityOption3;
}
export declare class YoutubePlaylistItemsUpdateRequest extends SpeakeasyBase {
    queryParams: YoutubePlaylistItemsUpdateQueryParams;
    request?: shared.PlaylistItem;
    security: YoutubePlaylistItemsUpdateSecurity;
}
export declare class YoutubePlaylistItemsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    playlistItem?: shared.PlaylistItem;
    statusCode: number;
}
