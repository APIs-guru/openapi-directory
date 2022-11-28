import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBeneficiariesHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetBeneficiariesSecurity extends SpeakeasyBase {
    psuoAuth2Security: shared.SchemePsuoAuth2Security;
}
export declare class GetBeneficiariesRequest extends SpeakeasyBase {
    headers: GetBeneficiariesHeaders;
    security: GetBeneficiariesSecurity;
}
export declare class GetBeneficiariesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obReadBeneficiary5?: shared.ObReadBeneficiary5;
    statusCode: number;
}
