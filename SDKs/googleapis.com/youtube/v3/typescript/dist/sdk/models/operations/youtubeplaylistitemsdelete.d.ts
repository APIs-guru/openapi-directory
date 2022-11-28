import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubePlaylistItemsDeleteQueryParams extends SpeakeasyBase {
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
export declare class YoutubePlaylistItemsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistItemsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistItemsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubePlaylistItemsDeleteSecurity extends SpeakeasyBase {
    option1?: YoutubePlaylistItemsDeleteSecurityOption1;
    option2?: YoutubePlaylistItemsDeleteSecurityOption2;
    option3?: YoutubePlaylistItemsDeleteSecurityOption3;
}
export declare class YoutubePlaylistItemsDeleteRequest extends SpeakeasyBase {
    queryParams: YoutubePlaylistItemsDeleteQueryParams;
    security: YoutubePlaylistItemsDeleteSecurity;
}
export declare class YoutubePlaylistItemsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
