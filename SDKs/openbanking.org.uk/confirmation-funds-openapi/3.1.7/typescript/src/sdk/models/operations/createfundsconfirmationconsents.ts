import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFundsConfirmationConsentsHeaders extends SpeakeasyBase {
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
}


export class CreateFundsConfirmationConsentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class CreateFundsConfirmationConsentsRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFundsConfirmationConsentsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ObFundsConfirmationConsent1;

  @Metadata()
  security: CreateFundsConfirmationConsentsSecurity;
}


export class CreateFundsConfirmationConsentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obFundsConfirmationConsentResponse1?: shared.ObFundsConfirmationConsentResponse1;

  @Metadata()
  statusCode: number;
}
