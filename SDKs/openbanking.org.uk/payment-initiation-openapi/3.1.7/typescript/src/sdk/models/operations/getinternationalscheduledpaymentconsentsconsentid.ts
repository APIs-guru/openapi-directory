import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInternationalScheduledPaymentConsentsConsentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" })
  consentId: string;
}


export class GetInternationalScheduledPaymentConsentsConsentIdHeaders extends SpeakeasyBase {
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


export class GetInternationalScheduledPaymentConsentsConsentIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetInternationalScheduledPaymentConsentsConsentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInternationalScheduledPaymentConsentsConsentIdPathParams;

  @Metadata()
  headers: GetInternationalScheduledPaymentConsentsConsentIdHeaders;

  @Metadata()
  security: GetInternationalScheduledPaymentConsentsConsentIdSecurity;
}


export class GetInternationalScheduledPaymentConsentsConsentIdResponse extends SpeakeasyBase {
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
