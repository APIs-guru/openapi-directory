import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelPaymentPathParams extends SpeakeasyBase {
    paymentProduct: shared.PaymentProductEnum;
    paymentService: shared.PaymentServiceEnum;
    paymentId: string;
}
export declare class CancelPaymentHeaders extends SpeakeasyBase {
    digest?: string;
    psuAccept?: string;
    psuAcceptCharset?: string;
    psuAcceptEncoding?: string;
    psuAcceptLanguage?: string;
    psuDeviceId?: string;
    psuGeoLocation?: string;
    psuHttpMethod?: shared.PsuHttpMethodEnum;
    psuIpAddress?: string;
    psuIpPort?: string;
    psuUserAgent?: string;
    signature?: string;
    tppExplicitAuthorisationPreferred?: boolean;
    tppNokRedirectUri?: string;
    tppRedirectPreferred?: boolean;
    tppRedirectUri?: string;
    tppSignatureCertificate?: string;
    xRequestId: string;
}
export declare class CancelPaymentSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
export declare class CancelPaymentRequest extends SpeakeasyBase {
    pathParams: CancelPaymentPathParams;
    headers: CancelPaymentHeaders;
    security: CancelPaymentSecurity;
}
export declare class CancelPaymentResponse extends SpeakeasyBase {
    contentType: string;
    error400NgPis?: shared.Error400NgPis;
    error400Pis?: shared.Error400Pis;
    error401NgPis?: shared.Error401NgPis;
    error401Pis?: shared.Error401Pis;
    error403NgPis?: shared.Error403NgPis;
    error403Pis?: shared.Error403Pis;
    error404NgPis?: shared.Error404NgPis;
    error404Pis?: shared.Error404Pis;
    error405NgPisCanc?: shared.Error405NgPisCanc;
    error405PisCanc?: shared.Error405PisCanc;
    error409NgPis?: shared.Error409NgPis;
    error409Pis?: shared.Error409Pis;
    headers: Map<string, string[]>;
    statusCode: number;
    paymentInitiationCancelResponse202?: shared.PaymentInitiationCancelResponse202;
}
