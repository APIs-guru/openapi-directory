import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdProductPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdProductHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdProductSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetAccountsAccountIdProductRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdProductPathParams;
    headers: GetAccountsAccountIdProductHeaders;
    security: GetAccountsAccountIdProductSecurity;
}
export declare class GetAccountsAccountIdProductResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadProduct2?: shared.ObReadProduct2;
    statusCode: number;
}
