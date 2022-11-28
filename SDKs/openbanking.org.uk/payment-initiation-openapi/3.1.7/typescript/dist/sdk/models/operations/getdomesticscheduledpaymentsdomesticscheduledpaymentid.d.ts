import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPathParams extends SpeakeasyBase {
    domesticScheduledPaymentId: string;
}
export declare class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest extends SpeakeasyBase {
    pathParams: GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPathParams;
    headers: GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders;
    security: GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity;
}
export declare class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteDomesticScheduledResponse5?: shared.ObWriteDomesticScheduledResponse5;
    statusCode: number;
}
