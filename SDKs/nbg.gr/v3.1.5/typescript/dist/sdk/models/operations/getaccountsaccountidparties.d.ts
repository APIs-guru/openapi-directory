import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdPartiesPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdPartiesHeaders extends SpeakeasyBase {
    sandboxId: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdPartiesSecurity extends SpeakeasyBase {
    authorizationCodeToken: shared.SchemeAuthorizationCodeToken;
    clientId: shared.SchemeClientId;
}
export declare class GetAccountsAccountIdPartiesRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdPartiesPathParams;
    headers: GetAccountsAccountIdPartiesHeaders;
    security: GetAccountsAccountIdPartiesSecurity;
}
export declare class GetAccountsAccountIdPartiesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadParty3?: shared.ObReadParty3;
    statusCode: number;
}
