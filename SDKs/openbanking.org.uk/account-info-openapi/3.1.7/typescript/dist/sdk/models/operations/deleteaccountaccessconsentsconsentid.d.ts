import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAccountAccessConsentsConsentIdPathParams extends SpeakeasyBase {
    consentId: string;
}
export declare class DeleteAccountAccessConsentsConsentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class DeleteAccountAccessConsentsConsentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class DeleteAccountAccessConsentsConsentIdRequest extends SpeakeasyBase {
    pathParams: DeleteAccountAccessConsentsConsentIdPathParams;
    headers: DeleteAccountAccessConsentsConsentIdHeaders;
    security: DeleteAccountAccessConsentsConsentIdSecurity;
}
export declare class DeleteAccountAccessConsentsConsentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    statusCode: number;
}
