import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDomesticPaymentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" })
  xCustomerUserAgent?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" })
  xFapiAuthDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" })
  xFapiCustomerIpAddress?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" })
  xFapiInteractionId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-idempotency-key" })
  xIdempotencyKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-jws-signature" })
  xJwsSignature: string;
}


export class CreateDomesticPaymentsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" })
  applicationJosePlusJwe: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  obWriteDomestic2?: shared.ObWriteDomestic2;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  obWriteDomestic3?: shared.ObWriteDomestic2;
}


export class CreateDomesticPaymentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  psuoAuth2Security: shared.SchemePsuoAuth2Security;
}


export class CreateDomesticPaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDomesticPaymentsHeaders;

  @SpeakeasyMetadata()
  request: CreateDomesticPaymentsRequests;

  @SpeakeasyMetadata()
  security: CreateDomesticPaymentsSecurity;
}


export class CreateDomesticPaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obWriteDomesticResponse5?: shared.ObWriteDomesticResponse5;

  @SpeakeasyMetadata()
  statusCode: number;
}
