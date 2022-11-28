import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAccountAccessConsentsHeaders extends SpeakeasyBase {
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
}


export class CreateAccountAccessConsentsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/jose+jwe" })
  applicationJosePlusJwe: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  obReadConsent1?: shared.ObReadConsent1;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  obReadConsent2?: shared.ObReadConsent1;
}


export class CreateAccountAccessConsentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class CreateAccountAccessConsentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateAccountAccessConsentsHeaders;

  @SpeakeasyMetadata()
  request: CreateAccountAccessConsentsRequests;

  @SpeakeasyMetadata()
  security: CreateAccountAccessConsentsSecurity;
}


export class CreateAccountAccessConsentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obReadConsentResponse1?: shared.ObReadConsentResponse1;

  @SpeakeasyMetadata()
  statusCode: number;
}
