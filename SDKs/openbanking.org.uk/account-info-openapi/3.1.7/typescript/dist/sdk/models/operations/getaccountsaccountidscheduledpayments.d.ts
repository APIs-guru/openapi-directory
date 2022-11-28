import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdScheduledPaymentsPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdScheduledPaymentsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdScheduledPaymentsSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetAccountsAccountIdScheduledPaymentsRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdScheduledPaymentsPathParams;
    headers: GetAccountsAccountIdScheduledPaymentsHeaders;
    security: GetAccountsAccountIdScheduledPaymentsSecurity;
}
export declare class GetAccountsAccountIdScheduledPaymentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadScheduledPayment3?: shared.ObReadScheduledPayment3;
    statusCode: number;
}
