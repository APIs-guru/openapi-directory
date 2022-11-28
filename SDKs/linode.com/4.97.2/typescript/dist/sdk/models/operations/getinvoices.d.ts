import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvoicesQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetInvoicesSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetInvoices200ApplicationJson extends SpeakeasyBase {
    data?: shared.Invoice[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetInvoicesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetInvoicesRequest extends SpeakeasyBase {
    queryParams: GetInvoicesQueryParams;
    security: GetInvoicesSecurity;
}
export declare class GetInvoicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getInvoices200ApplicationJsonObject?: GetInvoices200ApplicationJson;
    getInvoicesDefaultApplicationJsonObject?: GetInvoicesDefaultApplicationJson;
}
