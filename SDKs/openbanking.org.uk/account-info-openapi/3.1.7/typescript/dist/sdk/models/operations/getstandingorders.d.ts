import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStandingOrdersHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetStandingOrdersSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetStandingOrdersRequest extends SpeakeasyBase {
    headers: GetStandingOrdersHeaders;
    security: GetStandingOrdersSecurity;
}
export declare class GetStandingOrdersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadStandingOrder6?: shared.ObReadStandingOrder6;
    statusCode: number;
}
