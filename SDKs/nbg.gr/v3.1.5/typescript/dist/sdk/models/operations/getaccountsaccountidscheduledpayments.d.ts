import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdScheduledPaymentsPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdScheduledPaymentsHeaders extends SpeakeasyBase {
    sandboxId: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdScheduledPaymentsSecurity extends SpeakeasyBase {
    authorizationCodeToken: shared.SchemeAuthorizationCodeToken;
    clientId: shared.SchemeClientId;
}
export declare class GetAccountsAccountIdScheduledPaymentsRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdScheduledPaymentsPathParams;
    headers: GetAccountsAccountIdScheduledPaymentsHeaders;
    security: GetAccountsAccountIdScheduledPaymentsSecurity;
}
export declare class GetAccountsAccountIdScheduledPaymentsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadScheduledPayment3?: shared.ObReadScheduledPayment3;
    statusCode: number;
}
