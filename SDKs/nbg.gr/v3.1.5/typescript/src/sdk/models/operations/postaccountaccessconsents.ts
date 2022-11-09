import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAccountAccessConsentsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=sandbox-id" })
  sandboxId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" })
  xCustomerUserAgent?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" })
  xFapiAuthDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" })
  xFapiCustomerIpAddress?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" })
  xFapiInteractionId?: string;
}


export class PostAccountAccessConsentsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  obReadConsent1?: shared.ObReadConsent1;

  @Metadata({ data: "request, media_type=application/json" })
  obReadConsent2?: shared.ObReadConsent1;
}


export class PostAccountAccessConsentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  clientCredentialsToken: shared.SchemeClientCredentialsToken;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class PostAccountAccessConsentsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostAccountAccessConsentsHeaders;

  @Metadata()
  request?: PostAccountAccessConsentsRequests;

  @Metadata()
  security: PostAccountAccessConsentsSecurity;
}


export class PostAccountAccessConsentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obReadConsentResponse1?: shared.ObReadConsentResponse1;

  @Metadata()
  statusCode: number;
}
