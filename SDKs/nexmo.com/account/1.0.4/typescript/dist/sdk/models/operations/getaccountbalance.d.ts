import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const GETACCOUNTBALANCE_SERVERS: string[];
export declare class GetAccountBalanceQueryParams extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
}
export declare class GetAccountBalanceRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: GetAccountBalanceQueryParams;
}
export declare class GetAccountBalanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorAuthenticationFailedAccountBalance?: shared.ErrorAuthenticationFailedAccountBalance;
    statusCode: number;
    accountBalance?: shared.AccountBalance;
}
