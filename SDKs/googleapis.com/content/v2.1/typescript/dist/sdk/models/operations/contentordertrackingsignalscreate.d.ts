import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdertrackingsignalsCreatePathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentOrdertrackingsignalsCreateQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdertrackingsignalsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdertrackingsignalsCreateRequest extends SpeakeasyBase {
    pathParams: ContentOrdertrackingsignalsCreatePathParams;
    queryParams: ContentOrdertrackingsignalsCreateQueryParams;
    request?: shared.OrderTrackingSignalInput;
    security: ContentOrdertrackingsignalsCreateSecurity;
}
export declare class ContentOrdertrackingsignalsCreateResponse extends SpeakeasyBase {
    contentType: string;
    orderTrackingSignal?: shared.OrderTrackingSignal;
    statusCode: number;
}
