import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersChannelsPatchPathParams extends SpeakeasyBase {
    advertiserId: string;
    channelId: string;
}
export declare class DisplayvideoAdvertisersChannelsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    partnerId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersChannelsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersChannelsPatchRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersChannelsPatchPathParams;
    queryParams: DisplayvideoAdvertisersChannelsPatchQueryParams;
    request?: shared.ChannelInput;
    security: DisplayvideoAdvertisersChannelsPatchSecurity;
}
export declare class DisplayvideoAdvertisersChannelsPatchResponse extends SpeakeasyBase {
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
}
