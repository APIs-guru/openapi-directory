import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartPaymentInitiationCancellationAuthorisationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment-product" })
  paymentProduct: shared.PaymentProductEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment-service" })
  paymentService: shared.PaymentServiceEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=paymentId" })
  paymentId: string;
}


export class StartPaymentInitiationCancellationAuthorisationHeaders extends SpeakeasyBase {
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
  psuIpAddress?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" })
  psuIpPort?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" })
  psuUserAgent?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Signature" })
  signature?: string;

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

  @Metadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" })
  tppSignatureCertificate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Request-ID" })
  xRequestId: string;
}


export class StartPaymentInitiationCancellationAuthorisationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}


export class StartPaymentInitiationCancellationAuthorisationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StartPaymentInitiationCancellationAuthorisationPathParams;

  @Metadata()
  headers: StartPaymentInitiationCancellationAuthorisationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: StartPaymentInitiationCancellationAuthorisationSecurity;
}


export class StartPaymentInitiationCancellationAuthorisationResponse extends SpeakeasyBase {
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
  startScaprocessResponse?: shared.StartScaprocessResponse;
}
