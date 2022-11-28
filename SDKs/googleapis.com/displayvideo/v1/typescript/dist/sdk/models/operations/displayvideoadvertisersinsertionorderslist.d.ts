import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersInsertionOrdersListPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersInsertionOrdersListQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersInsertionOrdersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersInsertionOrdersListRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersInsertionOrdersListPathParams;
    queryParams: DisplayvideoAdvertisersInsertionOrdersListQueryParams;
    security: DisplayvideoAdvertisersInsertionOrdersListSecurity;
}
export declare class DisplayvideoAdvertisersInsertionOrdersListResponse extends SpeakeasyBase {
    contentType: string;
    listInsertionOrdersResponse?: shared.ListInsertionOrdersResponse;
    statusCode: number;
}
