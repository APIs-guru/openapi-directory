import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersRefundorderPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersRefundorderQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersRefundorderSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersRefundorderRequest extends SpeakeasyBase {
    pathParams: ContentOrdersRefundorderPathParams;
    queryParams: ContentOrdersRefundorderQueryParams;
    request?: shared.OrdersRefundOrderRequest;
    security: ContentOrdersRefundorderSecurity;
}
export declare class ContentOrdersRefundorderResponse extends SpeakeasyBase {
    contentType: string;
    ordersRefundOrderResponse?: shared.OrdersRefundOrderResponse;
    statusCode: number;
}
