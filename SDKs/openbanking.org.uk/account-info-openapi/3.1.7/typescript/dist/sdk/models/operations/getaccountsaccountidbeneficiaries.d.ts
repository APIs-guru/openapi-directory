import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdBeneficiariesPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdBeneficiariesHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdBeneficiariesSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetAccountsAccountIdBeneficiariesRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdBeneficiariesPathParams;
    headers: GetAccountsAccountIdBeneficiariesHeaders;
    security: GetAccountsAccountIdBeneficiariesSecurity;
}
export declare class GetAccountsAccountIdBeneficiariesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadBeneficiary5?: shared.ObReadBeneficiary5;
    statusCode: number;
}
