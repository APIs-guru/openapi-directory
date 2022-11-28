import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersCancelPathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrdersCancelQueryParams extends SpeakeasyBase {
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
export declare class ContentOrdersCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersCancelRequest extends SpeakeasyBase {
    pathParams: ContentOrdersCancelPathParams;
    queryParams: ContentOrdersCancelQueryParams;
    request?: shared.OrdersCancelRequest;
    security: ContentOrdersCancelSecurity;
}
export declare class ContentOrdersCancelResponse extends SpeakeasyBase {
    contentType: string;
    ordersCancelResponse?: shared.OrdersCancelResponse;
    statusCode: number;
}
