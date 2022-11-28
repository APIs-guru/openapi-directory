import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersCreatetestreturnPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersCreatetestreturnQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersCreatetestreturnSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersCreatetestreturnRequest extends SpeakeasyBase {
    pathParams: ContentOrdersCreatetestreturnPathParams;
    queryParams: ContentOrdersCreatetestreturnQueryParams;
    request?: shared.OrdersCreateTestReturnRequest;
    security: ContentOrdersCreatetestreturnSecurity;
}
export declare class ContentOrdersCreatetestreturnResponse extends SpeakeasyBase {
    contentType: string;
    ordersCreateTestReturnResponse?: shared.OrdersCreateTestReturnResponse;
    statusCode: number;
}
