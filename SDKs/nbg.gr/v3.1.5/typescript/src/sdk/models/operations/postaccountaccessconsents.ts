import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAccountAccessConsentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=sandbox-id" })
  sandboxId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" })
  xCustomerUserAgent?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" })
  xFapiAuthDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" })
  xFapiCustomerIpAddress?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" })
  xFapiInteractionId?: string;
}


export class PostAccountAccessConsentsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  obReadConsent1?: shared.ObReadConsent1;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  obReadConsent2?: shared.ObReadConsent1;
}


export class PostAccountAccessConsentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  clientCredentialsToken: shared.SchemeClientCredentialsToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class PostAccountAccessConsentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostAccountAccessConsentsHeaders;

  @SpeakeasyMetadata()
  request?: PostAccountAccessConsentsRequests;

  @SpeakeasyMetadata()
  security: PostAccountAccessConsentsSecurity;
}


export class PostAccountAccessConsentsResponse extends SpeakeasyBase {
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
