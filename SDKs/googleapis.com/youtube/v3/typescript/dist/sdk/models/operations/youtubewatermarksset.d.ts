import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeWatermarksSetQueryParams extends SpeakeasyBase {
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
export declare class YoutubeWatermarksSetRequests extends SpeakeasyBase {
    applicationOctetStream: Uint8Array;
    imageJpeg: Uint8Array;
    imagePng: Uint8Array;
}
export declare class YoutubeWatermarksSetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeWatermarksSetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeWatermarksSetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeWatermarksSetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeWatermarksSetSecurity extends SpeakeasyBase {
    option1?: YoutubeWatermarksSetSecurityOption1;
    option2?: YoutubeWatermarksSetSecurityOption2;
    option3?: YoutubeWatermarksSetSecurityOption3;
    option4?: YoutubeWatermarksSetSecurityOption4;
}
export declare class YoutubeWatermarksSetRequest extends SpeakeasyBase {
    queryParams: YoutubeWatermarksSetQueryParams;
    request?: YoutubeWatermarksSetRequests;
    security: YoutubeWatermarksSetSecurity;
}
export declare class YoutubeWatermarksSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
