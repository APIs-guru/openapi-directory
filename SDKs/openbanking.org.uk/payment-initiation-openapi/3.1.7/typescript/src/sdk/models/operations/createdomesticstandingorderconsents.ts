import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDomesticStandingOrderConsentsHeaders extends SpeakeasyBase {
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


export class CreateDomesticStandingOrderConsentsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/jose+jwe" })
  applicationJosePlusJwe: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  obWriteDomesticStandingOrderConsent5?: shared.ObWriteDomesticStandingOrderConsent5;

  @Metadata({ data: "request, media_type=application/json" })
  obWriteDomesticStandingOrderConsent6?: shared.ObWriteDomesticStandingOrderConsent5;
}


export class CreateDomesticStandingOrderConsentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class CreateDomesticStandingOrderConsentsRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDomesticStandingOrderConsentsHeaders;

  @Metadata()
  request: CreateDomesticStandingOrderConsentsRequests;

  @Metadata()
  security: CreateDomesticStandingOrderConsentsSecurity;
}


export class CreateDomesticStandingOrderConsentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obWriteDomesticStandingOrderConsentResponse6?: shared.ObWriteDomesticStandingOrderConsentResponse6;

  @Metadata()
  statusCode: number;
}
