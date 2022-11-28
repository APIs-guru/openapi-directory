import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdDirectDebitsPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdDirectDebitsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdDirectDebitsSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetAccountsAccountIdDirectDebitsRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdDirectDebitsPathParams;
    headers: GetAccountsAccountIdDirectDebitsHeaders;
    security: GetAccountsAccountIdDirectDebitsSecurity;
}
export declare class GetAccountsAccountIdDirectDebitsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadDirectDebit2?: shared.ObReadDirectDebit2;
    statusCode: number;
}
