import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersReturnrefundlineitemPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersReturnrefundlineitemQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersReturnrefundlineitemSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersReturnrefundlineitemRequest extends SpeakeasyBase {
    pathParams: ContentOrdersReturnrefundlineitemPathParams;
    queryParams: ContentOrdersReturnrefundlineitemQueryParams;
    request?: shared.OrdersReturnRefundLineItemRequest;
    security: ContentOrdersReturnrefundlineitemSecurity;
}
export declare class ContentOrdersReturnrefundlineitemResponse extends SpeakeasyBase {
    contentType: string;
    ordersReturnRefundLineItemResponse?: shared.OrdersReturnRefundLineItemResponse;
    statusCode: number;
}
