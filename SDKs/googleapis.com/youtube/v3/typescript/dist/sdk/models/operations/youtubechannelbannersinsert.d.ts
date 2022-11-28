import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeChannelBannersInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    channelId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    onBehalfOfContentOwnerChannel?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeChannelBannersInsertRequests extends SpeakeasyBase {
    applicationOctetStream: Uint8Array;
    imageJpeg: Uint8Array;
    imagePng: Uint8Array;
}
export declare class YoutubeChannelBannersInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelBannersInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelBannersInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelBannersInsertSecurity extends SpeakeasyBase {
    option1?: YoutubeChannelBannersInsertSecurityOption1;
    option2?: YoutubeChannelBannersInsertSecurityOption2;
    option3?: YoutubeChannelBannersInsertSecurityOption3;
}
export declare class YoutubeChannelBannersInsertRequest extends SpeakeasyBase {
    queryParams: YoutubeChannelBannersInsertQueryParams;
    request?: YoutubeChannelBannersInsertRequests;
    security: YoutubeChannelBannersInsertSecurity;
}
export declare class YoutubeChannelBannersInsertResponse extends SpeakeasyBase {
    channelBannerResource?: shared.ChannelBannerResource;
    contentType: string;
    statusCode: number;
}
