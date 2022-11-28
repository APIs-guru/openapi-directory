import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomesticPaymentsDomesticPaymentIdPathParams extends SpeakeasyBase {
    domesticPaymentId: string;
}
export declare class GetDomesticPaymentsDomesticPaymentIdHeaders extends SpeakeasyBase {
    authorization: string;
    xCustomerUserAgent?: string;
    xFapiAuthDate?: string;
    xFapiCustomerIpAddress?: string;
    xFapiInteractionId?: string;
}
export declare class GetDomesticPaymentsDomesticPaymentIdSecurity extends SpeakeasyBase {
    tppoAuth2Security: shared.SchemeTppoAuth2Security;
}
export declare class GetDomesticPaymentsDomesticPaymentIdRequest extends SpeakeasyBase {
    pathParams: GetDomesticPaymentsDomesticPaymentIdPathParams;
    headers: GetDomesticPaymentsDomesticPaymentIdHeaders;
    security: GetDomesticPaymentsDomesticPaymentIdSecurity;
}
export declare class GetDomesticPaymentsDomesticPaymentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    obErrorResponse1?: shared.ObErrorResponse1;
    obWriteDomesticResponse5?: shared.ObWriteDomesticResponse5;
    statusCode: number;
}
