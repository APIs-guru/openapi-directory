import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersAdvancetestorderPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersAdvancetestorderQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersAdvancetestorderSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersAdvancetestorderRequest extends SpeakeasyBase {
    pathParams: ContentOrdersAdvancetestorderPathParams;
    queryParams: ContentOrdersAdvancetestorderQueryParams;
    security: ContentOrdersAdvancetestorderSecurity;
}
export declare class ContentOrdersAdvancetestorderResponse extends SpeakeasyBase {
    contentType: string;
    ordersAdvanceTestOrderResponse?: shared.OrdersAdvanceTestOrderResponse;
    statusCode: number;
}
