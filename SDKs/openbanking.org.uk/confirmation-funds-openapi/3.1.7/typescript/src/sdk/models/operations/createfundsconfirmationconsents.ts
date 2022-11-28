import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFundsConfirmationConsentsHeaders extends SpeakeasyBase {
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


export class CreateFundsConfirmationConsentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class CreateFundsConfirmationConsentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateFundsConfirmationConsentsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ObFundsConfirmationConsent1;

  @SpeakeasyMetadata()
  security: CreateFundsConfirmationConsentsSecurity;
}


export class CreateFundsConfirmationConsentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obFundsConfirmationConsentResponse1?: shared.ObFundsConfirmationConsentResponse1;

  @SpeakeasyMetadata()
  statusCode: number;
}
