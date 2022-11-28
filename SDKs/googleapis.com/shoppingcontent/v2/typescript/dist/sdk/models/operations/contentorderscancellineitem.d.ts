import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersCancellineitemPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersCancellineitemQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersCancellineitemSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersCancellineitemRequest extends SpeakeasyBase {
    pathParams: ContentOrdersCancellineitemPathParams;
    queryParams: ContentOrdersCancellineitemQueryParams;
    request?: shared.OrdersCancelLineItemRequest;
    security: ContentOrdersCancellineitemSecurity;
}
export declare class ContentOrdersCancellineitemResponse extends SpeakeasyBase {
    contentType: string;
    ordersCancelLineItemResponse?: shared.OrdersCancelLineItemResponse;
    statusCode: number;
}
