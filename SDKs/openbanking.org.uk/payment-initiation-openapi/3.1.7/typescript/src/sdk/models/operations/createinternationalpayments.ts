import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateInternationalPaymentsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" })
  xCustomerUserAgent?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" })
  xFapiAuthDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" })
  xFapiCustomerIpAddress?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" })
  xFapiInteractionId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-idempotency-key" })
  xIdempotencyKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-jws-signature" })
  xJwsSignature: string;
}


export class CreateInternationalPaymentsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/jose+jwe" })
  applicationJosePlusJwe: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  obWriteInternational3?: shared.ObWriteInternational3;

  @Metadata({ data: "request, media_type=application/json" })
  obWriteInternational4?: shared.ObWriteInternational3;
}


export class CreateInternationalPaymentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  psuoAuth2Security: shared.SchemePsuoAuth2Security;
}


export class CreateInternationalPaymentsRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateInternationalPaymentsHeaders;

  @Metadata()
  request: CreateInternationalPaymentsRequests;

  @Metadata()
  security: CreateInternationalPaymentsSecurity;
}


export class CreateInternationalPaymentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obWriteInternationalResponse5?: shared.ObWriteInternationalResponse5;

  @Metadata()
  statusCode: number;
}
