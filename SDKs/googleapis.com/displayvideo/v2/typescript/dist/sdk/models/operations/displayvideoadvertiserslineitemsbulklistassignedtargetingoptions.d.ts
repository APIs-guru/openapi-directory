import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    lineItemIds?: string[];
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsPathParams;
    queryParams: DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsQueryParams;
    security: DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsSecurity;
}
export declare class DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsResponse extends SpeakeasyBase {
    bulkListAssignedTargetingOptionsResponse?: shared.BulkListAssignedTargetingOptionsResponse;
    contentType: string;
    statusCode: number;
}
