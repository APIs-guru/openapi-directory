import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvoiceItemsPathParams extends SpeakeasyBase {
    invoiceId: number;
}
export declare class GetInvoiceItemsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetInvoiceItemsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetInvoiceItems200ApplicationJson extends SpeakeasyBase {
    data?: shared.InvoiceItem[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetInvoiceItemsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetInvoiceItemsRequest extends SpeakeasyBase {
    pathParams: GetInvoiceItemsPathParams;
    queryParams: GetInvoiceItemsQueryParams;
    security: GetInvoiceItemsSecurity;
}
export declare class GetInvoiceItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getInvoiceItems200ApplicationJsonObject?: GetInvoiceItems200ApplicationJson;
    getInvoiceItemsDefaultApplicationJsonObject?: GetInvoiceItemsDefaultApplicationJson;
}
