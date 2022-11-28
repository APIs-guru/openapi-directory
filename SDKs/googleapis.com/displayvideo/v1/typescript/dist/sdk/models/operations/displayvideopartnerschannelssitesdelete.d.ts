import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoPartnersChannelsSitesDeletePathParams extends SpeakeasyBase {
    channelId: string;
    partnerId: string;
    urlOrAppId: string;
}
export declare class DisplayvideoPartnersChannelsSitesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoPartnersChannelsSitesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoPartnersChannelsSitesDeleteRequest extends SpeakeasyBase {
    pathParams: DisplayvideoPartnersChannelsSitesDeletePathParams;
    queryParams: DisplayvideoPartnersChannelsSitesDeleteQueryParams;
    security: DisplayvideoPartnersChannelsSitesDeleteSecurity;
}
export declare class DisplayvideoPartnersChannelsSitesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
