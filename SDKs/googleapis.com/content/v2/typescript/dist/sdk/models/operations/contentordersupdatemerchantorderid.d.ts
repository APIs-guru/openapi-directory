import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersUpdatemerchantorderidPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersUpdatemerchantorderidQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersUpdatemerchantorderidSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersUpdatemerchantorderidRequest extends SpeakeasyBase {
    pathParams: ContentOrdersUpdatemerchantorderidPathParams;
    queryParams: ContentOrdersUpdatemerchantorderidQueryParams;
    request?: shared.OrdersUpdateMerchantOrderIdRequest;
    security: ContentOrdersUpdatemerchantorderidSecurity;
}
export declare class ContentOrdersUpdatemerchantorderidResponse extends SpeakeasyBase {
    contentType: string;
    ordersUpdateMerchantOrderIdResponse?: shared.OrdersUpdateMerchantOrderIdResponse;
    statusCode: number;
}
