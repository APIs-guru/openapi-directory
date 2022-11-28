import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubePlaylistsUpdateQueryParams extends SpeakeasyBase {
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
export declare class YoutubePlaylistsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistsUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistsUpdateSecurity extends SpeakeasyBase {
    option1?: YoutubePlaylistsUpdateSecurityOption1;
    option2?: YoutubePlaylistsUpdateSecurityOption2;
    option3?: YoutubePlaylistsUpdateSecurityOption3;
}
export declare class YoutubePlaylistsUpdateRequest extends SpeakeasyBase {
    queryParams: YoutubePlaylistsUpdateQueryParams;
    request?: shared.Playlist;
    security: YoutubePlaylistsUpdateSecurity;
}
export declare class YoutubePlaylistsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    playlist?: shared.Playlist;
    statusCode: number;
}
