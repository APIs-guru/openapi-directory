import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionsQueryParams extends SpeakeasyBase {
    fromBookingDateTime?: Date;
    toBookingDateTime?: Date;
}
export declare class GetTransactionsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetTransactionsSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetTransactionsRequest extends SpeakeasyBase {
    queryParams: GetTransactionsQueryParams;
    headers: GetTransactionsHeaders;
    security: GetTransactionsSecurity;
}
export declare class GetTransactionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadTransaction6?: shared.ObReadTransaction6;
    statusCode: number;
}
