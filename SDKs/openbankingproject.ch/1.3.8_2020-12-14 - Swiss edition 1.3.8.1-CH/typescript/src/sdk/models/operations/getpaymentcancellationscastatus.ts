import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentCancellationScaStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorisationId" })
  authorisationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-product" })
  paymentProduct: shared.PaymentProductEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-service" })
  paymentService: shared.PaymentServiceEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentId" })
  paymentId: string;
}


export class GetPaymentCancellationScaStatusHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" })
  tppSignatureCertificate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" })
  xRequestId: string;
}


export class GetPaymentCancellationScaStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}


export class GetPaymentCancellationScaStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentCancellationScaStatusPathParams;

  @SpeakeasyMetadata()
  headers: GetPaymentCancellationScaStatusHeaders;

  @SpeakeasyMetadata()
  security: GetPaymentCancellationScaStatusSecurity;
}


export class GetPaymentCancellationScaStatusResponse extends SpeakeasyBase {
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
  error405NgPis?: shared.Error405NgPis;

  @SpeakeasyMetadata()
  error405Pis?: shared.Error405Pis;

  @SpeakeasyMetadata()
  error409NgPis?: shared.Error409NgPis;

  @SpeakeasyMetadata()
  error409Pis?: shared.Error409Pis;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  scaStatusResponse?: shared.ScaStatusResponse;
}
