import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDomesticPaymentsHeaders extends SpeakeasyBase {
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


export class CreateDomesticPaymentsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/jose+jwe" })
  applicationJosePlusJwe: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  obWriteDomestic2?: shared.ObWriteDomestic2;

  @Metadata({ data: "request, media_type=application/json" })
  obWriteDomestic3?: shared.ObWriteDomestic2;
}


export class CreateDomesticPaymentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  psuoAuth2Security: shared.SchemePsuoAuth2Security;
}


export class CreateDomesticPaymentsRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDomesticPaymentsHeaders;

  @Metadata()
  request: CreateDomesticPaymentsRequests;

  @Metadata()
  security: CreateDomesticPaymentsSecurity;
}


export class CreateDomesticPaymentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obWriteDomesticResponse5?: shared.ObWriteDomesticResponse5;

  @Metadata()
  statusCode: number;
}
