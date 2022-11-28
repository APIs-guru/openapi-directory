import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubePlaylistsInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    onBehalfOfContentOwnerChannel?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubePlaylistsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistsInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistsInsertSecurity extends SpeakeasyBase {
    option1?: YoutubePlaylistsInsertSecurityOption1;
    option2?: YoutubePlaylistsInsertSecurityOption2;
    option3?: YoutubePlaylistsInsertSecurityOption3;
}
export declare class YoutubePlaylistsInsertRequest extends SpeakeasyBase {
    queryParams: YoutubePlaylistsInsertQueryParams;
    request?: shared.Playlist;
    security: YoutubePlaylistsInsertSecurity;
}
export declare class YoutubePlaylistsInsertResponse extends SpeakeasyBase {
    contentType: string;
    playlist?: shared.Playlist;
    statusCode: number;
}
