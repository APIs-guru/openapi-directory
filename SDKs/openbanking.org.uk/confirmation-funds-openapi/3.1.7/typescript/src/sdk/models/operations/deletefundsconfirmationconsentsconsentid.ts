import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteFundsConfirmationConsentsConsentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" })
  consentId: string;
}


export class DeleteFundsConfirmationConsentsConsentIdHeaders extends SpeakeasyBase {
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


export class DeleteFundsConfirmationConsentsConsentIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class DeleteFundsConfirmationConsentsConsentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFundsConfirmationConsentsConsentIdPathParams;

  @Metadata()
  headers: DeleteFundsConfirmationConsentsConsentIdHeaders;

  @Metadata()
  security: DeleteFundsConfirmationConsentsConsentIdSecurity;
}


export class DeleteFundsConfirmationConsentsConsentIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  statusCode: number;
}
