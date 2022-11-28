import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeWatermarksUnsetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    channelId: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeWatermarksUnsetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeWatermarksUnsetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeWatermarksUnsetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeWatermarksUnsetSecurity extends SpeakeasyBase {
    option1?: YoutubeWatermarksUnsetSecurityOption1;
    option2?: YoutubeWatermarksUnsetSecurityOption2;
    option3?: YoutubeWatermarksUnsetSecurityOption3;
}
export declare class YoutubeWatermarksUnsetRequest extends SpeakeasyBase {
    queryParams: YoutubeWatermarksUnsetQueryParams;
    security: YoutubeWatermarksUnsetSecurity;
}
export declare class YoutubeWatermarksUnsetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
