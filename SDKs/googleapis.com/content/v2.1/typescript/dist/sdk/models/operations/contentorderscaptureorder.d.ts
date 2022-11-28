import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersCaptureOrderPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersCaptureOrderQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersCaptureOrderSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersCaptureOrderRequest extends SpeakeasyBase {
    pathParams: ContentOrdersCaptureOrderPathParams;
    queryParams: ContentOrdersCaptureOrderQueryParams;
    request?: Map<string, any>;
    security: ContentOrdersCaptureOrderSecurity;
}
export declare class ContentOrdersCaptureOrderResponse extends SpeakeasyBase {
    captureOrderResponse?: shared.CaptureOrderResponse;
    contentType: string;
    statusCode: number;
}
