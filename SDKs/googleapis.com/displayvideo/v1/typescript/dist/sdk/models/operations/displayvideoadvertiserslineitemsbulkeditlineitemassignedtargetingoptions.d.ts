import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsPathParams extends SpeakeasyBase {
    advertiserId: string;
    lineItemId: string;
}
export declare class DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsPathParams;
    queryParams: DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams;
    request?: shared.BulkEditLineItemAssignedTargetingOptionsRequestInput;
    security: DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity;
}
export declare class DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse extends SpeakeasyBase {
    bulkEditLineItemAssignedTargetingOptionsResponse?: shared.BulkEditLineItemAssignedTargetingOptionsResponse;
    contentType: string;
    statusCode: number;
}
