import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersCanceltestorderbycustomerPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersCanceltestorderbycustomerQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersCanceltestorderbycustomerSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersCanceltestorderbycustomerRequest extends SpeakeasyBase {
    pathParams: ContentOrdersCanceltestorderbycustomerPathParams;
    queryParams: ContentOrdersCanceltestorderbycustomerQueryParams;
    request?: shared.OrdersCancelTestOrderByCustomerRequest;
    security: ContentOrdersCanceltestorderbycustomerSecurity;
}
export declare class ContentOrdersCanceltestorderbycustomerResponse extends SpeakeasyBase {
    contentType: string;
    ordersCancelTestOrderByCustomerResponse?: shared.OrdersCancelTestOrderByCustomerResponse;
    statusCode: number;
}
