import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersChannelsListPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersChannelsListQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersChannelsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersChannelsListRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersChannelsListPathParams;
    queryParams: DisplayvideoAdvertisersChannelsListQueryParams;
    security: DisplayvideoAdvertisersChannelsListSecurity;
}
export declare class DisplayvideoAdvertisersChannelsListResponse extends SpeakeasyBase {
    contentType: string;
    listChannelsResponse?: shared.ListChannelsResponse;
    statusCode: number;
}
