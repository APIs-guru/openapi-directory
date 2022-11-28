import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsPathParams extends SpeakeasyBase {
    advertiserId: string;
    insertionOrderId: string;
}
export declare class DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsPathParams;
    queryParams: DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsQueryParams;
    security: DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsSecurity;
}
export declare class DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsResponse extends SpeakeasyBase {
    bulkListInsertionOrderAssignedTargetingOptionsResponse?: shared.BulkListInsertionOrderAssignedTargetingOptionsResponse;
    contentType: string;
    statusCode: number;
}
