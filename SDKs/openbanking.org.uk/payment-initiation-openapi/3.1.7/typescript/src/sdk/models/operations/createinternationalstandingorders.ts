import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateInternationalStandingOrdersHeaders extends SpeakeasyBase {
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


export class CreateInternationalStandingOrdersRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/jose+jwe" })
  applicationJosePlusJwe: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  obWriteInternationalStandingOrder4?: shared.ObWriteInternationalStandingOrder4;

  @Metadata({ data: "request, media_type=application/json" })
  obWriteInternationalStandingOrder5?: shared.ObWriteInternationalStandingOrder4;
}


export class CreateInternationalStandingOrdersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  psuoAuth2Security: shared.SchemePsuoAuth2Security;
}


export class CreateInternationalStandingOrdersRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateInternationalStandingOrdersHeaders;

  @Metadata()
  request: CreateInternationalStandingOrdersRequests;

  @Metadata()
  security: CreateInternationalStandingOrdersSecurity;
}


export class CreateInternationalStandingOrdersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obWriteInternationalStandingOrderResponse7?: shared.ObWriteInternationalStandingOrderResponse7;

  @Metadata()
  statusCode: number;
}
