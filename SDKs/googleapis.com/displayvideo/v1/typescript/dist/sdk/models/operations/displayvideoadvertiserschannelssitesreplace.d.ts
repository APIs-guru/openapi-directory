import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersChannelsSitesReplacePathParams extends SpeakeasyBase {
    advertiserId: string;
    channelId: string;
}
export declare class DisplayvideoAdvertisersChannelsSitesReplaceQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
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
export declare class DisplayvideoAdvertisersChannelsSitesReplaceSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersChannelsSitesReplaceRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersChannelsSitesReplacePathParams;
    queryParams: DisplayvideoAdvertisersChannelsSitesReplaceQueryParams;
    request?: shared.ReplaceSitesRequestInput;
    security: DisplayvideoAdvertisersChannelsSitesReplaceSecurity;
}
export declare class DisplayvideoAdvertisersChannelsSitesReplaceResponse extends SpeakeasyBase {
    contentType: string;
    replaceSitesResponse?: shared.ReplaceSitesResponse;
    statusCode: number;
}
