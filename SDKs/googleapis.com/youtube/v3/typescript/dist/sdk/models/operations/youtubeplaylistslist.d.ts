import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubePlaylistsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    channelId?: string;
    fields?: string;
    hl?: string;
    id?: string[];
    key?: string;
    maxResults?: number;
    mine?: boolean;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    onBehalfOfContentOwnerChannel?: string;
    pageToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubePlaylistsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistsListSecurity extends SpeakeasyBase {
    option1?: YoutubePlaylistsListSecurityOption1;
    option2?: YoutubePlaylistsListSecurityOption2;
    option3?: YoutubePlaylistsListSecurityOption3;
    option4?: YoutubePlaylistsListSecurityOption4;
}
export declare class YoutubePlaylistsListRequest extends SpeakeasyBase {
    queryParams: YoutubePlaylistsListQueryParams;
    security: YoutubePlaylistsListSecurity;
}
export declare class YoutubePlaylistsListResponse extends SpeakeasyBase {
    contentType: string;
    playlistListResponse?: shared.PlaylistListResponse;
    statusCode: number;
}
