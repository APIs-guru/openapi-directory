import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersUpdateshipmentPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersUpdateshipmentQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersUpdateshipmentSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersUpdateshipmentRequest extends SpeakeasyBase {
    pathParams: ContentOrdersUpdateshipmentPathParams;
    queryParams: ContentOrdersUpdateshipmentQueryParams;
    request?: shared.OrdersUpdateShipmentRequest;
    security: ContentOrdersUpdateshipmentSecurity;
}
export declare class ContentOrdersUpdateshipmentResponse extends SpeakeasyBase {
    contentType: string;
    ordersUpdateShipmentResponse?: shared.OrdersUpdateShipmentResponse;
    statusCode: number;
}
