import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersRefundPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersRefundQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersRefundSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersRefundRequest extends SpeakeasyBase {
    pathParams: ContentOrdersRefundPathParams;
    queryParams: ContentOrdersRefundQueryParams;
    request?: shared.OrdersRefundRequest;
    security: ContentOrdersRefundSecurity;
}
export declare class ContentOrdersRefundResponse extends SpeakeasyBase {
    contentType: string;
    ordersRefundResponse?: shared.OrdersRefundResponse;
    statusCode: number;
}
