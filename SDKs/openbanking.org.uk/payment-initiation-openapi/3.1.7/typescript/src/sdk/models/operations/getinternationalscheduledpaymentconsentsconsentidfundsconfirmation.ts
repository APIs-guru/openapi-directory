import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" })
  consentId: string;
}


export class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders extends SpeakeasyBase {
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


export class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  psuoAuth2Security: shared.SchemePsuoAuth2Security;
}


export class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationPathParams;

  @Metadata()
  headers: GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationHeaders;

  @Metadata()
  security: GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity;
}


export class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obWriteFundsConfirmationResponse1?: shared.ObWriteFundsConfirmationResponse1;

  @Metadata()
  statusCode: number;
}
