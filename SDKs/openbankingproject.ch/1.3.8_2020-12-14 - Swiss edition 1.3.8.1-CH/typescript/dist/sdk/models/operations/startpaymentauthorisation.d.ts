import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartPaymentAuthorisationPathParams extends SpeakeasyBase {
    paymentProduct: shared.PaymentProductEnum;
    paymentService: shared.PaymentServiceEnum;
    paymentId: string;
}
export declare class StartPaymentAuthorisationHeaders extends SpeakeasyBase {
    digest?: string;
    psuAccept?: string;
    psuAcceptCharset?: string;
    psuAcceptEncoding?: string;
    psuAcceptLanguage?: string;
    psuCorporateId?: string;
    psuCorporateIdType?: string;
    psuDeviceId?: string;
    psuGeoLocation?: string;
    psuHttpMethod?: shared.PsuHttpMethodEnum;
    psuId?: string;
    psuIdType?: string;
    psuIpAddress?: string;
    psuIpPort?: string;
    psuUserAgent?: string;
    signature?: string;
    tppNokRedirectUri?: string;
    tppNotificationContentPreferred?: string;
    tppNotificationUri?: string;
    tppRedirectPreferred?: boolean;
    tppRedirectUri?: string;
    tppSignatureCertificate?: string;
    xRequestId: string;
}
export declare class StartPaymentAuthorisationSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
export declare class StartPaymentAuthorisationRequest extends SpeakeasyBase {
    pathParams: StartPaymentAuthorisationPathParams;
    headers: StartPaymentAuthorisationHeaders;
    request?: any;
    security: StartPaymentAuthorisationSecurity;
}
export declare class StartPaymentAuthorisationResponse extends SpeakeasyBase {
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
    startScaprocessResponse?: shared.StartScaprocessResponse;
}
