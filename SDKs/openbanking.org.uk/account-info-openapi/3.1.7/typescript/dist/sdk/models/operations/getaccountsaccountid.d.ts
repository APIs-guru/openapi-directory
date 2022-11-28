import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetAccountsAccountIdRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdPathParams;
    headers: GetAccountsAccountIdHeaders;
    security: GetAccountsAccountIdSecurity;
}
export declare class GetAccountsAccountIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadAccount6?: shared.ObReadAccount6;
    statusCode: number;
}
