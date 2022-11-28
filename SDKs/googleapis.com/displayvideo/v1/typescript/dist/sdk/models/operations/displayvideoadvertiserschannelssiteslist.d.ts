import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersChannelsSitesListPathParams extends SpeakeasyBase {
    advertiserId: string;
    channelId: string;
}
export declare class DisplayvideoAdvertisersChannelsSitesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    partnerId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersChannelsSitesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersChannelsSitesListRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersChannelsSitesListPathParams;
    queryParams: DisplayvideoAdvertisersChannelsSitesListQueryParams;
    security: DisplayvideoAdvertisersChannelsSitesListSecurity;
}
export declare class DisplayvideoAdvertisersChannelsSitesListResponse extends SpeakeasyBase {
    contentType: string;
    listSitesResponse?: shared.ListSitesResponse;
    statusCode: number;
}
