import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsPathParams extends SpeakeasyBase {
    advertiserId: string;
    insertionOrderId: string;
}
export declare class DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsPathParams;
    queryParams: DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams;
    security: DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsSecurity;
}
export declare class DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse extends SpeakeasyBase {
    bulkListInsertionOrderAssignedTargetingOptionsResponse?: shared.BulkListInsertionOrderAssignedTargetingOptionsResponse;
    contentType: string;
    statusCode: number;
}
