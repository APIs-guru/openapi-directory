import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDomesticScheduledPaymentConsentsHeaders extends SpeakeasyBase {
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


export class CreateDomesticScheduledPaymentConsentsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" })
  applicationJosePlusJwe: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  obWriteDomesticScheduledConsent4?: shared.ObWriteDomesticScheduledConsent4;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  obWriteDomesticScheduledConsent5?: shared.ObWriteDomesticScheduledConsent4;
}


export class CreateDomesticScheduledPaymentConsentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class CreateDomesticScheduledPaymentConsentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDomesticScheduledPaymentConsentsHeaders;

  @SpeakeasyMetadata()
  request: CreateDomesticScheduledPaymentConsentsRequests;

  @SpeakeasyMetadata()
  security: CreateDomesticScheduledPaymentConsentsSecurity;
}


export class CreateDomesticScheduledPaymentConsentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obWriteDomesticScheduledConsentResponse5?: shared.ObWriteDomesticScheduledConsentResponse5;

  @SpeakeasyMetadata()
  statusCode: number;
}
