import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLineItemsListPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersLineItemsListQueryParams extends SpeakeasyBase {
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
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersLineItemsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLineItemsListRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLineItemsListPathParams;
    queryParams: DisplayvideoAdvertisersLineItemsListQueryParams;
    security: DisplayvideoAdvertisersLineItemsListSecurity;
}
export declare class DisplayvideoAdvertisersLineItemsListResponse extends SpeakeasyBase {
    contentType: string;
    listLineItemsResponse?: shared.ListLineItemsResponse;
    statusCode: number;
}
