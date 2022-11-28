import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoPartnersChannelsSitesBulkEditPathParams extends SpeakeasyBase {
    channelId: string;
    partnerId: string;
}
export declare class DisplayvideoPartnersChannelsSitesBulkEditQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoPartnersChannelsSitesBulkEditSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoPartnersChannelsSitesBulkEditRequest extends SpeakeasyBase {
    pathParams: DisplayvideoPartnersChannelsSitesBulkEditPathParams;
    queryParams: DisplayvideoPartnersChannelsSitesBulkEditQueryParams;
    request?: shared.BulkEditSitesRequestInput;
    security: DisplayvideoPartnersChannelsSitesBulkEditSecurity;
}
export declare class DisplayvideoPartnersChannelsSitesBulkEditResponse extends SpeakeasyBase {
    bulkEditSitesResponse?: shared.BulkEditSitesResponse;
    contentType: string;
    statusCode: number;
}
