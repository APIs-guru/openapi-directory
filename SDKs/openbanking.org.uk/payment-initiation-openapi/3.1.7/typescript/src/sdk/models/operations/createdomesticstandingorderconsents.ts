import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDomesticStandingOrderConsentsHeaders extends SpeakeasyBase {
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


export class CreateDomesticStandingOrderConsentsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" })
  applicationJosePlusJwe: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  obWriteDomesticStandingOrderConsent5?: shared.ObWriteDomesticStandingOrderConsent5;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  obWriteDomesticStandingOrderConsent6?: shared.ObWriteDomesticStandingOrderConsent5;
}


export class CreateDomesticStandingOrderConsentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class CreateDomesticStandingOrderConsentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDomesticStandingOrderConsentsHeaders;

  @SpeakeasyMetadata()
  request: CreateDomesticStandingOrderConsentsRequests;

  @SpeakeasyMetadata()
  security: CreateDomesticStandingOrderConsentsSecurity;
}


export class CreateDomesticStandingOrderConsentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obWriteDomesticStandingOrderConsentResponse6?: shared.ObWriteDomesticStandingOrderConsentResponse6;

  @SpeakeasyMetadata()
  statusCode: number;
}
