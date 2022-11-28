import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersAcknowledgePathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersAcknowledgeQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersAcknowledgeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersAcknowledgeRequest extends SpeakeasyBase {
    pathParams: ContentOrdersAcknowledgePathParams;
    queryParams: ContentOrdersAcknowledgeQueryParams;
    request?: shared.OrdersAcknowledgeRequest;
    security: ContentOrdersAcknowledgeSecurity;
}
export declare class ContentOrdersAcknowledgeResponse extends SpeakeasyBase {
    contentType: string;
    ordersAcknowledgeResponse?: shared.OrdersAcknowledgeResponse;
    statusCode: number;
}
