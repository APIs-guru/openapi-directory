import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDomesticScheduledPaymentsHeaders extends SpeakeasyBase {
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


export class CreateDomesticScheduledPaymentsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" })
  applicationJosePlusJwe: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  obWriteDomesticScheduled2?: shared.ObWriteDomesticScheduled2;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  obWriteDomesticScheduled3?: shared.ObWriteDomesticScheduled2;
}


export class CreateDomesticScheduledPaymentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  psuoAuth2Security: shared.SchemePsuoAuth2Security;
}


export class CreateDomesticScheduledPaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDomesticScheduledPaymentsHeaders;

  @SpeakeasyMetadata()
  request: CreateDomesticScheduledPaymentsRequests;

  @SpeakeasyMetadata()
  security: CreateDomesticScheduledPaymentsSecurity;
}


export class CreateDomesticScheduledPaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obWriteDomesticScheduledResponse5?: shared.ObWriteDomesticScheduledResponse5;

  @SpeakeasyMetadata()
  statusCode: number;
}
