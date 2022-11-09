import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDomesticScheduledPaymentConsentsHeaders extends SpeakeasyBase {
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


export class CreateDomesticScheduledPaymentConsentsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/jose+jwe" })
  applicationJosePlusJwe: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  obWriteDomesticScheduledConsent4?: shared.ObWriteDomesticScheduledConsent4;

  @Metadata({ data: "request, media_type=application/json" })
  obWriteDomesticScheduledConsent5?: shared.ObWriteDomesticScheduledConsent4;
}


export class CreateDomesticScheduledPaymentConsentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class CreateDomesticScheduledPaymentConsentsRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDomesticScheduledPaymentConsentsHeaders;

  @Metadata()
  request: CreateDomesticScheduledPaymentConsentsRequests;

  @Metadata()
  security: CreateDomesticScheduledPaymentConsentsSecurity;
}


export class CreateDomesticScheduledPaymentConsentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obWriteDomesticScheduledConsentResponse5?: shared.ObWriteDomesticScheduledConsentResponse5;

  @Metadata()
  statusCode: number;
}
