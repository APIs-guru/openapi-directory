import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubePlaylistsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubePlaylistsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistsDeleteSecurity extends SpeakeasyBase {
    option1?: YoutubePlaylistsDeleteSecurityOption1;
    option2?: YoutubePlaylistsDeleteSecurityOption2;
    option3?: YoutubePlaylistsDeleteSecurityOption3;
}
export declare class YoutubePlaylistsDeleteRequest extends SpeakeasyBase {
    queryParams: YoutubePlaylistsDeleteQueryParams;
    security: YoutubePlaylistsDeleteSecurity;
}
export declare class YoutubePlaylistsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
