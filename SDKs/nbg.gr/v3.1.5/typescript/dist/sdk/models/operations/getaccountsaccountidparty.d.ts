import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdPartyPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdPartyHeaders extends SpeakeasyBase {
    sandboxId: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdPartySecurity extends SpeakeasyBase {
    authorizationCodeToken: shared.SchemeAuthorizationCodeToken;
    clientId: shared.SchemeClientId;
}
export declare class GetAccountsAccountIdPartyRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdPartyPathParams;
    headers: GetAccountsAccountIdPartyHeaders;
    security: GetAccountsAccountIdPartySecurity;
}
export declare class GetAccountsAccountIdPartyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadParty2?: shared.ObReadParty2;
    statusCode: number;
}
