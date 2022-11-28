import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvoicePathParams extends SpeakeasyBase {
    invoiceId: number;
}
export declare class GetInvoiceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetInvoiceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetInvoiceRequest extends SpeakeasyBase {
    pathParams: GetInvoicePathParams;
    security: GetInvoiceSecurity;
}
export declare class GetInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    invoice?: shared.Invoice;
    statusCode: number;
    getInvoiceDefaultApplicationJsonObject?: GetInvoiceDefaultApplicationJson;
}
