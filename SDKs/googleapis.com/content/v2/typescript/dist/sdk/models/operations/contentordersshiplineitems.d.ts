import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersShiplineitemsPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersShiplineitemsQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersShiplineitemsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersShiplineitemsRequest extends SpeakeasyBase {
    pathParams: ContentOrdersShiplineitemsPathParams;
    queryParams: ContentOrdersShiplineitemsQueryParams;
    request?: shared.OrdersShipLineItemsRequest;
    security: ContentOrdersShiplineitemsSecurity;
}
export declare class ContentOrdersShiplineitemsResponse extends SpeakeasyBase {
    contentType: string;
    ordersShipLineItemsResponse?: shared.OrdersShipLineItemsResponse;
    statusCode: number;
}
