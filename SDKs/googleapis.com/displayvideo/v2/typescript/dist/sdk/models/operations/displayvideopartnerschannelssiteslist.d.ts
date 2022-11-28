import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoPartnersChannelsSitesListPathParams extends SpeakeasyBase {
    channelId: string;
    partnerId: string;
}
export declare class DisplayvideoPartnersChannelsSitesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoPartnersChannelsSitesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoPartnersChannelsSitesListRequest extends SpeakeasyBase {
    pathParams: DisplayvideoPartnersChannelsSitesListPathParams;
    queryParams: DisplayvideoPartnersChannelsSitesListQueryParams;
    security: DisplayvideoPartnersChannelsSitesListSecurity;
}
export declare class DisplayvideoPartnersChannelsSitesListResponse extends SpeakeasyBase {
    contentType: string;
    listSitesResponse?: shared.ListSitesResponse;
    statusCode: number;
}
