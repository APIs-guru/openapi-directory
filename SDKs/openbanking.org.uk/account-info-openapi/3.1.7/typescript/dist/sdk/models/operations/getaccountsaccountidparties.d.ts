import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdPartiesPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdPartiesHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdPartiesSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetAccountsAccountIdPartiesRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdPartiesPathParams;
    headers: GetAccountsAccountIdPartiesHeaders;
    security: GetAccountsAccountIdPartiesSecurity;
}
export declare class GetAccountsAccountIdPartiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadParty3?: shared.ObReadParty3;
    statusCode: number;
}
