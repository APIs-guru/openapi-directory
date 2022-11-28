import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoPartnersChannelsSitesReplacePathParams extends SpeakeasyBase {
    channelId: string;
    partnerId: string;
}
export declare class DisplayvideoPartnersChannelsSitesReplaceQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoPartnersChannelsSitesReplaceSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoPartnersChannelsSitesReplaceRequest extends SpeakeasyBase {
    pathParams: DisplayvideoPartnersChannelsSitesReplacePathParams;
    queryParams: DisplayvideoPartnersChannelsSitesReplaceQueryParams;
    request?: shared.ReplaceSitesRequestInput;
    security: DisplayvideoPartnersChannelsSitesReplaceSecurity;
}
export declare class DisplayvideoPartnersChannelsSitesReplaceResponse extends SpeakeasyBase {
    contentType: string;
    replaceSitesResponse?: shared.ReplaceSitesResponse;
    statusCode: number;
}
