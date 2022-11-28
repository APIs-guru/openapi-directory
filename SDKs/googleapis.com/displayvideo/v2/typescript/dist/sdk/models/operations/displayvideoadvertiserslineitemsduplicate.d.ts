import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLineItemsDuplicatePathParams extends SpeakeasyBase {
    advertiserId: string;
    lineItemId: string;
}
export declare class DisplayvideoAdvertisersLineItemsDuplicateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersLineItemsDuplicateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLineItemsDuplicateRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLineItemsDuplicatePathParams;
    queryParams: DisplayvideoAdvertisersLineItemsDuplicateQueryParams;
    request?: shared.DuplicateLineItemRequest;
    security: DisplayvideoAdvertisersLineItemsDuplicateSecurity;
}
export declare class DisplayvideoAdvertisersLineItemsDuplicateResponse extends SpeakeasyBase {
    contentType: string;
    duplicateLineItemResponse?: shared.DuplicateLineItemResponse;
    statusCode: number;
}
