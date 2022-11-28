import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdBeneficiariesPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdBeneficiariesHeaders extends SpeakeasyBase {
    sandboxId: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdBeneficiariesSecurity extends SpeakeasyBase {
    authorizationCodeToken: shared.SchemeAuthorizationCodeToken;
    clientId: shared.SchemeClientId;
}
export declare class GetAccountsAccountIdBeneficiariesRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdBeneficiariesPathParams;
    headers: GetAccountsAccountIdBeneficiariesHeaders;
    security: GetAccountsAccountIdBeneficiariesSecurity;
}
export declare class GetAccountsAccountIdBeneficiariesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadBeneficiary5?: shared.ObReadBeneficiary5;
    statusCode: number;
}
