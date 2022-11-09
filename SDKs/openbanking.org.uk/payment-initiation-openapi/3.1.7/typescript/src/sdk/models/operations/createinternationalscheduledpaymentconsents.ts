import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateInternationalScheduledPaymentConsentsHeaders extends SpeakeasyBase {
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


export class CreateInternationalScheduledPaymentConsentsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/jose+jwe" })
  applicationJosePlusJwe: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  obWriteInternationalScheduledConsent5?: shared.ObWriteInternationalScheduledConsent5;

  @Metadata({ data: "request, media_type=application/json" })
  obWriteInternationalScheduledConsent6?: shared.ObWriteInternationalScheduledConsent5;
}


export class CreateInternationalScheduledPaymentConsentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class CreateInternationalScheduledPaymentConsentsRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateInternationalScheduledPaymentConsentsHeaders;

  @Metadata()
  request: CreateInternationalScheduledPaymentConsentsRequests;

  @Metadata()
  security: CreateInternationalScheduledPaymentConsentsSecurity;
}


export class CreateInternationalScheduledPaymentConsentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obWriteInternationalScheduledConsentResponse6?: shared.ObWriteInternationalScheduledConsentResponse6;

  @Metadata()
  statusCode: number;
}
