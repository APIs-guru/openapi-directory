import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersRefunditemPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersRefunditemQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersRefunditemSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersRefunditemRequest extends SpeakeasyBase {
    pathParams: ContentOrdersRefunditemPathParams;
    queryParams: ContentOrdersRefunditemQueryParams;
    request?: shared.OrdersRefundItemRequest;
    security: ContentOrdersRefunditemSecurity;
}
export declare class ContentOrdersRefunditemResponse extends SpeakeasyBase {
    contentType: string;
    ordersRefundItemResponse?: shared.OrdersRefundItemResponse;
    statusCode: number;
}
