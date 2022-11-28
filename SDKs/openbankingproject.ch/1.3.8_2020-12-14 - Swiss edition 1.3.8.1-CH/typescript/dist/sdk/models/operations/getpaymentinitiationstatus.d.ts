import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentInitiationStatusPathParams extends SpeakeasyBase {
    paymentProduct: shared.PaymentProductEnum;
    paymentService: shared.PaymentServiceEnum;
    paymentId: string;
}
export declare class GetPaymentInitiationStatusHeaders extends SpeakeasyBase {
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
    tppSignatureCertificate?: string;
    xRequestId: string;
}
export declare class GetPaymentInitiationStatusSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
export declare class GetPaymentInitiationStatusRequest extends SpeakeasyBase {
    pathParams: GetPaymentInitiationStatusPathParams;
    headers: GetPaymentInitiationStatusHeaders;
    security: GetPaymentInitiationStatusSecurity;
}
export declare class GetPaymentInitiationStatusResponse extends SpeakeasyBase {
    contentType: string;
    error400NgPis?: shared.Error400NgPis;
    error400Pis?: shared.Error400Pis;
    error401NgPis?: shared.Error401NgPis;
    error401Pis?: shared.Error401Pis;
    error403NgPis?: shared.Error403NgPis;
    error403Pis?: shared.Error403Pis;
    error404NgPis?: shared.Error404NgPis;
    error404Pis?: shared.Error404Pis;
    error405NgPis?: shared.Error405NgPis;
    error405Pis?: shared.Error405Pis;
    error409NgPis?: shared.Error409NgPis;
    error409Pis?: shared.Error409Pis;
    headers: Map<string, string[]>;
    statusCode: number;
    paymentInitiationStatusResponse200Json?: shared.PaymentInitiationStatusResponse200Json;
    paymentInitiationStatusResponse200Xml?: string;
}
