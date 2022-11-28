import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrderinvoicesCreatechargeinvoicePathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrderinvoicesCreatechargeinvoiceQueryParams extends SpeakeasyBase {
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
export declare class ContentOrderinvoicesCreatechargeinvoiceSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrderinvoicesCreatechargeinvoiceRequest extends SpeakeasyBase {
    pathParams: ContentOrderinvoicesCreatechargeinvoicePathParams;
    queryParams: ContentOrderinvoicesCreatechargeinvoiceQueryParams;
    request?: shared.OrderinvoicesCreateChargeInvoiceRequest;
    security: ContentOrderinvoicesCreatechargeinvoiceSecurity;
}
export declare class ContentOrderinvoicesCreatechargeinvoiceResponse extends SpeakeasyBase {
    contentType: string;
    orderinvoicesCreateChargeInvoiceResponse?: shared.OrderinvoicesCreateChargeInvoiceResponse;
    statusCode: number;
}
