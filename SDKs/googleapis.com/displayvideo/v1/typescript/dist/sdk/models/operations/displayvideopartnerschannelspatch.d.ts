import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoPartnersChannelsPatchPathParams extends SpeakeasyBase {
    channelId: string;
    partnerId: string;
}
export declare class DisplayvideoPartnersChannelsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoPartnersChannelsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoPartnersChannelsPatchRequest extends SpeakeasyBase {
    pathParams: DisplayvideoPartnersChannelsPatchPathParams;
    queryParams: DisplayvideoPartnersChannelsPatchQueryParams;
    request?: shared.ChannelInput;
    security: DisplayvideoPartnersChannelsPatchSecurity;
}
export declare class DisplayvideoPartnersChannelsPatchResponse extends SpeakeasyBase {
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
}
