import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsPathParams;
    queryParams: DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsQueryParams;
    request?: shared.BulkEditAssignedTargetingOptionsRequestInput;
    security: DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsSecurity;
}
export declare class DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsResponse extends SpeakeasyBase {
    bulkEditAssignedTargetingOptionsResponse?: shared.BulkEditAssignedTargetingOptionsResponse;
    contentType: string;
    statusCode: number;
}
