import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersSetlineitemmetadataPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersSetlineitemmetadataQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersSetlineitemmetadataSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersSetlineitemmetadataRequest extends SpeakeasyBase {
    pathParams: ContentOrdersSetlineitemmetadataPathParams;
    queryParams: ContentOrdersSetlineitemmetadataQueryParams;
    request?: shared.OrdersSetLineItemMetadataRequest;
    security: ContentOrdersSetlineitemmetadataSecurity;
}
export declare class ContentOrdersSetlineitemmetadataResponse extends SpeakeasyBase {
    contentType: string;
    ordersSetLineItemMetadataResponse?: shared.OrdersSetLineItemMetadataResponse;
    statusCode: number;
}
