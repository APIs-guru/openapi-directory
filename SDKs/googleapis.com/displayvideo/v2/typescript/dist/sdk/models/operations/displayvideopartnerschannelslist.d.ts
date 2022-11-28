import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoPartnersChannelsListPathParams extends SpeakeasyBase {
    partnerId: string;
}
export declare class DisplayvideoPartnersChannelsListQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoPartnersChannelsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoPartnersChannelsListRequest extends SpeakeasyBase {
    pathParams: DisplayvideoPartnersChannelsListPathParams;
    queryParams: DisplayvideoPartnersChannelsListQueryParams;
    security: DisplayvideoPartnersChannelsListSecurity;
}
export declare class DisplayvideoPartnersChannelsListResponse extends SpeakeasyBase {
    contentType: string;
    listChannelsResponse?: shared.ListChannelsResponse;
    statusCode: number;
}
