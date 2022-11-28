import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const TopUpAccountBalanceServerList: readonly ["https://rest.nexmo.com"];
export declare class TopUpAccountBalanceQueryParams extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
}
export declare class TopUpAccountBalanceRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: TopUpAccountBalanceQueryParams;
    request: shared.TopupRequest;
}
export declare class TopUpAccountBalanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    success?: shared.Success;
    topUpAccountBalance401ApplicationJsonOneOf?: any;
}
