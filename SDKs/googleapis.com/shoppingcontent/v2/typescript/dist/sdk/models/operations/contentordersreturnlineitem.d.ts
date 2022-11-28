import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersReturnlineitemPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersReturnlineitemQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersReturnlineitemSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersReturnlineitemRequest extends SpeakeasyBase {
    pathParams: ContentOrdersReturnlineitemPathParams;
    queryParams: ContentOrdersReturnlineitemQueryParams;
    request?: shared.OrdersReturnLineItemRequest;
    security: ContentOrdersReturnlineitemSecurity;
}
export declare class ContentOrdersReturnlineitemResponse extends SpeakeasyBase {
    contentType: string;
    ordersReturnLineItemResponse?: shared.OrdersReturnLineItemResponse;
    statusCode: number;
}
