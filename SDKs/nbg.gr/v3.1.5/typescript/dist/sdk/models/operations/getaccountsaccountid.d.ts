import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdHeaders extends SpeakeasyBase {
    sandboxId: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdSecurity extends SpeakeasyBase {
    authorizationCodeToken: shared.SchemeAuthorizationCodeToken;
    clientId: shared.SchemeClientId;
}
export declare class GetAccountsAccountIdRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdPathParams;
    headers: GetAccountsAccountIdHeaders;
    security: GetAccountsAccountIdSecurity;
}
export declare class GetAccountsAccountIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadAccount5?: shared.ObReadAccount5;
    statusCode: number;
}
