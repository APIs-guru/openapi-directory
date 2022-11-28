import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubePlaylistItemsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    pageToken?: string;
    part: string[];
    playlistId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    videoId?: string;
}
export declare class YoutubePlaylistItemsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistItemsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistItemsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistItemsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistItemsListSecurity extends SpeakeasyBase {
    option1?: YoutubePlaylistItemsListSecurityOption1;
    option2?: YoutubePlaylistItemsListSecurityOption2;
    option3?: YoutubePlaylistItemsListSecurityOption3;
    option4?: YoutubePlaylistItemsListSecurityOption4;
}
export declare class YoutubePlaylistItemsListRequest extends SpeakeasyBase {
    queryParams: YoutubePlaylistItemsListQueryParams;
    security: YoutubePlaylistItemsListSecurity;
}
export declare class YoutubePlaylistItemsListResponse extends SpeakeasyBase {
    contentType: string;
    playlistItemListResponse?: shared.PlaylistItemListResponse;
    statusCode: number;
}
