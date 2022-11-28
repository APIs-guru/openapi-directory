import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBalancesHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetBalancesSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetBalancesRequest extends SpeakeasyBase {
    headers: GetBalancesHeaders;
    security: GetBalancesSecurity;
}
export declare class GetBalancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadBalance1?: shared.ObReadBalance1;
    statusCode: number;
}
