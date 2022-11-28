import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStatementsQueryParams extends SpeakeasyBase {
    fromStatementDateTime?: Date;
    toStatementDateTime?: Date;
}
export declare class GetStatementsHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetStatementsSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetStatementsRequest extends SpeakeasyBase {
    queryParams: GetStatementsQueryParams;
    headers: GetStatementsHeaders;
    security: GetStatementsSecurity;
}
export declare class GetStatementsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadStatement2?: shared.ObReadStatement2;
    statusCode: number;
}
