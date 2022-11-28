import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPartyHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetPartySecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetPartyRequest extends SpeakeasyBase {
    headers: GetPartyHeaders;
    security: GetPartySecurity;
}
export declare class GetPartyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadParty2?: shared.ObReadParty2;
    statusCode: number;
}
