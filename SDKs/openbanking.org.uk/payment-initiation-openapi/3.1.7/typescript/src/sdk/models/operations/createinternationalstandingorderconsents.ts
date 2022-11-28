import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateInternationalStandingOrderConsentsHeaders extends SpeakeasyBase {
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


export class CreateInternationalStandingOrderConsentsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" })
  applicationJosePlusJwe: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  obWriteInternationalStandingOrderConsent6?: shared.ObWriteInternationalStandingOrderConsent6;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  obWriteInternationalStandingOrderConsent7?: shared.ObWriteInternationalStandingOrderConsent6;
}


export class CreateInternationalStandingOrderConsentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class CreateInternationalStandingOrderConsentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateInternationalStandingOrderConsentsHeaders;

  @SpeakeasyMetadata()
  request: CreateInternationalStandingOrderConsentsRequests;

  @SpeakeasyMetadata()
  security: CreateInternationalStandingOrderConsentsSecurity;
}


export class CreateInternationalStandingOrderConsentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obWriteInternationalStandingOrderConsentResponse7?: shared.ObWriteInternationalStandingOrderConsentResponse7;

  @SpeakeasyMetadata()
  statusCode: number;
}
