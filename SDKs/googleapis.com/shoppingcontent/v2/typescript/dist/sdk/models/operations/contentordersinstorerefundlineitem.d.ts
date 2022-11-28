import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersInstorerefundlineitemPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersInstorerefundlineitemQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersInstorerefundlineitemSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersInstorerefundlineitemRequest extends SpeakeasyBase {
    pathParams: ContentOrdersInstorerefundlineitemPathParams;
    queryParams: ContentOrdersInstorerefundlineitemQueryParams;
    request?: shared.OrdersInStoreRefundLineItemRequest;
    security: ContentOrdersInstorerefundlineitemSecurity;
}
export declare class ContentOrdersInstorerefundlineitemResponse extends SpeakeasyBase {
    contentType: string;
    ordersInStoreRefundLineItemResponse?: shared.OrdersInStoreRefundLineItemResponse;
    statusCode: number;
}
