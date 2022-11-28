import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDomesticPaymentConsentsHeaders extends SpeakeasyBase {
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


export class CreateDomesticPaymentConsentsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" })
  applicationJosePlusJwe: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  obWriteDomesticConsent4?: shared.ObWriteDomesticConsent4;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  obWriteDomesticConsent5?: shared.ObWriteDomesticConsent4;
}


export class CreateDomesticPaymentConsentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class CreateDomesticPaymentConsentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDomesticPaymentConsentsHeaders;

  @SpeakeasyMetadata()
  request: CreateDomesticPaymentConsentsRequests;

  @SpeakeasyMetadata()
  security: CreateDomesticPaymentConsentsSecurity;
}


export class CreateDomesticPaymentConsentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obWriteDomesticConsentResponse5?: shared.ObWriteDomesticConsentResponse5;

  @SpeakeasyMetadata()
  statusCode: number;
}
