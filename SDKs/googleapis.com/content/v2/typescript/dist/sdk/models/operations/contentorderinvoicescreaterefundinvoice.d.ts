import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrderinvoicesCreaterefundinvoicePathParams extends SpeakeasyBase {
    merchantId: string;
    orderId: string;
}
export declare class ContentOrderinvoicesCreaterefundinvoiceQueryParams extends SpeakeasyBase {
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
export declare class ContentOrderinvoicesCreaterefundinvoiceSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrderinvoicesCreaterefundinvoiceRequest extends SpeakeasyBase {
    pathParams: ContentOrderinvoicesCreaterefundinvoicePathParams;
    queryParams: ContentOrderinvoicesCreaterefundinvoiceQueryParams;
    request?: shared.OrderinvoicesCreateRefundInvoiceRequest;
    security: ContentOrderinvoicesCreaterefundinvoiceSecurity;
}
export declare class ContentOrderinvoicesCreaterefundinvoiceResponse extends SpeakeasyBase {
    contentType: string;
    orderinvoicesCreateRefundInvoiceResponse?: shared.OrderinvoicesCreateRefundInvoiceResponse;
    statusCode: number;
}
