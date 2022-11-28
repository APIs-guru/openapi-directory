import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" })
  consentId: string;
}


export class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders extends SpeakeasyBase {
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


export class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  psuoAuth2Security: shared.SchemePsuoAuth2Security;
}


export class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationPathParams;

  @SpeakeasyMetadata()
  headers: GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders;

  @SpeakeasyMetadata()
  security: GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity;
}


export class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obWriteFundsConfirmationResponse1?: shared.ObWriteFundsConfirmationResponse1;

  @SpeakeasyMetadata()
  statusCode: number;
}
