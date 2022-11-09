import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InitiatePaymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment-product" })
  paymentProduct: shared.PaymentProductEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment-service" })
  paymentService: shared.PaymentServiceEnum;
}


export class InitiatePaymentHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Consent-ID" })
  consentId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Digest" })
  digest?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-Accept" })
  psuAccept?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" })
  psuAcceptCharset?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" })
  psuAcceptEncoding?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" })
  psuAcceptLanguage?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID" })
  psuCorporateId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID-Type" })
  psuCorporateIdType?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" })
  psuDeviceId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" })
  psuGeoLocation?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" })
  psuHttpMethod?: shared.PsuHttpMethodEnum;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-ID" })
  psuId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-ID-Type" })
  psuIdType?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" })
  psuIpAddress: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" })
  psuIpPort?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" })
  psuUserAgent?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Signature" })
  signature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=TPP-Brand-Logging-Information" })
  tppBrandLoggingInformation?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=TPP-Explicit-Authorisation-Preferred" })
  tppExplicitAuthorisationPreferred?: boolean;

  @Metadata({ data: "header, style=simple;explode=false;name=TPP-Nok-Redirect-URI" })
  tppNokRedirectUri?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=TPP-Notification-Content-Preferred" })
  tppNotificationContentPreferred?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=TPP-Notification-URI" })
  tppNotificationUri?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-Preferred" })
  tppRedirectPreferred?: boolean;

  @Metadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-URI" })
  tppRedirectUri?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=TPP-Rejection-NoFunds-Preferred" })
  tppRejectionNoFundsPreferred?: boolean;

  @Metadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" })
  tppSignatureCertificate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Request-ID" })
  xRequestId: string;
}


export class InitiatePaymentRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  oneOf?: any;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  periodicPaymentInitiationMultipartBody?: shared.PeriodicPaymentInitiationMultipartBody;
}


export class InitiatePaymentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}


export class InitiatePaymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InitiatePaymentPathParams;

  @Metadata()
  headers: InitiatePaymentHeaders;

  @Metadata()
  request: InitiatePaymentRequests;

  @Metadata()
  security: InitiatePaymentSecurity;
}


export class InitiatePaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error400NgPis?: shared.Error400NgPis;

  @Metadata()
  error400Pis?: shared.Error400Pis;

  @Metadata()
  error401NgPis?: shared.Error401NgPis;

  @Metadata()
  error401Pis?: shared.Error401Pis;

  @Metadata()
  error403NgPis?: shared.Error403NgPis;

  @Metadata()
  error403Pis?: shared.Error403Pis;

  @Metadata()
  error404NgPis?: shared.Error404NgPis;

  @Metadata()
  error404Pis?: shared.Error404Pis;

  @Metadata()
  error405NgPis?: shared.Error405NgPis;

  @Metadata()
  error405Pis?: shared.Error405Pis;

  @Metadata()
  error409NgPis?: shared.Error409NgPis;

  @Metadata()
  error409Pis?: shared.Error409Pis;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  paymentInitationRequestResponse201?: shared.PaymentInitationRequestResponse201;
}
