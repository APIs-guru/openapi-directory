import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoPartnersChannelsCreatePathParams extends SpeakeasyBase {
    partnerId: string;
}
export declare class DisplayvideoPartnersChannelsCreateQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoPartnersChannelsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoPartnersChannelsCreateRequest extends SpeakeasyBase {
    pathParams: DisplayvideoPartnersChannelsCreatePathParams;
    queryParams: DisplayvideoPartnersChannelsCreateQueryParams;
    request?: shared.ChannelInput;
    security: DisplayvideoPartnersChannelsCreateSecurity;
}
export declare class DisplayvideoPartnersChannelsCreateResponse extends SpeakeasyBase {
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
}
