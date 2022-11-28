import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersCreatetestorderPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentOrdersCreatetestorderQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersCreatetestorderSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersCreatetestorderRequest extends SpeakeasyBase {
    pathParams: ContentOrdersCreatetestorderPathParams;
    queryParams: ContentOrdersCreatetestorderQueryParams;
    request?: shared.OrdersCreateTestOrderRequest;
    security: ContentOrdersCreatetestorderSecurity;
}
export declare class ContentOrdersCreatetestorderResponse extends SpeakeasyBase {
    contentType: string;
    ordersCreateTestOrderResponse?: shared.OrdersCreateTestOrderResponse;
    statusCode: number;
}
