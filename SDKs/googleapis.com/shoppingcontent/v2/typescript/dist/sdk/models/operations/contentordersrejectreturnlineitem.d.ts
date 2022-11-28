import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersRejectreturnlineitemPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersRejectreturnlineitemQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersRejectreturnlineitemSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersRejectreturnlineitemRequest extends SpeakeasyBase {
    pathParams: ContentOrdersRejectreturnlineitemPathParams;
    queryParams: ContentOrdersRejectreturnlineitemQueryParams;
    request?: shared.OrdersRejectReturnLineItemRequest;
    security: ContentOrdersRejectreturnlineitemSecurity;
}
export declare class ContentOrdersRejectreturnlineitemResponse extends SpeakeasyBase {
    contentType: string;
    ordersRejectReturnLineItemResponse?: shared.OrdersRejectReturnLineItemResponse;
    statusCode: number;
}
