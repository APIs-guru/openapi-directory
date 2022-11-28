import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetPaymentsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetPayments200ApplicationJson extends SpeakeasyBase {
    data?: shared.Payment[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetPaymentsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetPaymentsRequest extends SpeakeasyBase {
    queryParams: GetPaymentsQueryParams;
    security: GetPaymentsSecurity;
}
export declare class GetPaymentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPayments200ApplicationJsonObject?: GetPayments200ApplicationJson;
    getPaymentsDefaultApplicationJsonObject?: GetPaymentsDefaultApplicationJson;
}
