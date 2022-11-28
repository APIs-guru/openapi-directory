import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersChannelsSitesDeletePathParams extends SpeakeasyBase {
    advertiserId: string;
    channelId: string;
    urlOrAppId: string;
}
export declare class DisplayvideoAdvertisersChannelsSitesDeleteQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersChannelsSitesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersChannelsSitesDeleteRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersChannelsSitesDeletePathParams;
    queryParams: DisplayvideoAdvertisersChannelsSitesDeleteQueryParams;
    security: DisplayvideoAdvertisersChannelsSitesDeleteSecurity;
}
export declare class DisplayvideoAdvertisersChannelsSitesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
