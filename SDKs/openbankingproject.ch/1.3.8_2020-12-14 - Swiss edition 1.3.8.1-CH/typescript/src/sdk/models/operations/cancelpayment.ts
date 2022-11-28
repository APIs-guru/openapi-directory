import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CancelPaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-product" })
  paymentProduct: shared.PaymentProductEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-service" })
  paymentService: shared.PaymentServiceEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentId" })
  paymentId: string;
}


export class CancelPaymentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" })
  digest?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" })
  psuAccept?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" })
  psuAcceptCharset?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" })
  psuAcceptEncoding?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" })
  psuAcceptLanguage?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" })
  psuDeviceId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" })
  psuGeoLocation?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" })
  psuHttpMethod?: shared.PsuHttpMethodEnum;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" })
  psuIpAddress?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" })
  psuIpPort?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" })
  psuUserAgent?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Explicit-Authorisation-Preferred" })
  tppExplicitAuthorisationPreferred?: boolean;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Nok-Redirect-URI" })
  tppNokRedirectUri?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-Preferred" })
  tppRedirectPreferred?: boolean;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-URI" })
  tppRedirectUri?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" })
  tppSignatureCertificate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" })
  xRequestId: string;
}


export class CancelPaymentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}


export class CancelPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelPaymentPathParams;

  @SpeakeasyMetadata()
  headers: CancelPaymentHeaders;

  @SpeakeasyMetadata()
  security: CancelPaymentSecurity;
}


export class CancelPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error400NgPis?: shared.Error400NgPis;

  @SpeakeasyMetadata()
  error400Pis?: shared.Error400Pis;

  @SpeakeasyMetadata()
  error401NgPis?: shared.Error401NgPis;

  @SpeakeasyMetadata()
  error401Pis?: shared.Error401Pis;

  @SpeakeasyMetadata()
  error403NgPis?: shared.Error403NgPis;

  @SpeakeasyMetadata()
  error403Pis?: shared.Error403Pis;

  @SpeakeasyMetadata()
  error404NgPis?: shared.Error404NgPis;

  @SpeakeasyMetadata()
  error404Pis?: shared.Error404Pis;

  @SpeakeasyMetadata()
  error405NgPisCanc?: shared.Error405NgPisCanc;

  @SpeakeasyMetadata()
  error405PisCanc?: shared.Error405PisCanc;

  @SpeakeasyMetadata()
  error409NgPis?: shared.Error409NgPis;

  @SpeakeasyMetadata()
  error409Pis?: shared.Error409Pis;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  paymentInitiationCancelResponse202?: shared.PaymentInitiationCancelResponse202;
}
