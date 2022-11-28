import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersUpdatelineitemshippingdetailsPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersUpdatelineitemshippingdetailsQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersUpdatelineitemshippingdetailsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersUpdatelineitemshippingdetailsRequest extends SpeakeasyBase {
    pathParams: ContentOrdersUpdatelineitemshippingdetailsPathParams;
    queryParams: ContentOrdersUpdatelineitemshippingdetailsQueryParams;
    request?: shared.OrdersUpdateLineItemShippingDetailsRequest;
    security: ContentOrdersUpdatelineitemshippingdetailsSecurity;
}
export declare class ContentOrdersUpdatelineitemshippingdetailsResponse extends SpeakeasyBase {
    contentType: string;
    ordersUpdateLineItemShippingDetailsResponse?: shared.OrdersUpdateLineItemShippingDetailsResponse;
    statusCode: number;
}
