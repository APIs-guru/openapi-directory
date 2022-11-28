import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLineItemsBulkUpdatePathParams extends SpeakeasyBase {
    advertisersId: string;
}
export declare class DisplayvideoAdvertisersLineItemsBulkUpdateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersLineItemsBulkUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLineItemsBulkUpdateRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLineItemsBulkUpdatePathParams;
    queryParams: DisplayvideoAdvertisersLineItemsBulkUpdateQueryParams;
    request?: shared.BulkUpdateLineItemsRequestInput;
    security: DisplayvideoAdvertisersLineItemsBulkUpdateSecurity;
}
export declare class DisplayvideoAdvertisersLineItemsBulkUpdateResponse extends SpeakeasyBase {
    bulkUpdateLineItemsResponse?: shared.BulkUpdateLineItemsResponse;
    contentType: string;
    statusCode: number;
}
