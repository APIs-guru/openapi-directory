import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersGetPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersGetQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersGetRequest extends SpeakeasyBase {
    pathParams: ContentOrdersGetPathParams;
    queryParams: ContentOrdersGetQueryParams;
    security: ContentOrdersGetSecurity;
}
export declare class ContentOrdersGetResponse extends SpeakeasyBase {
    contentType: string;
    order?: shared.Order;
    statusCode: number;
}
