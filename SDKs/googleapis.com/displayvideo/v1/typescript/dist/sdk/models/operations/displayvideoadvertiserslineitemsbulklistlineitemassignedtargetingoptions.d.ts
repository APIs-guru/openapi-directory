import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsPathParams extends SpeakeasyBase {
    advertiserId: string;
    lineItemId: string;
}
export declare class DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsPathParams;
    queryParams: DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams;
    security: DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsSecurity;
}
export declare class DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse extends SpeakeasyBase {
    bulkListLineItemAssignedTargetingOptionsResponse?: shared.BulkListLineItemAssignedTargetingOptionsResponse;
    contentType: string;
    statusCode: number;
}
