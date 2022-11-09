import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInternationalStandingOrderConsentsConsentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" })
  consentId: string;
}


export class GetInternationalStandingOrderConsentsConsentIdHeaders extends SpeakeasyBase {
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


export class GetInternationalStandingOrderConsentsConsentIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetInternationalStandingOrderConsentsConsentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInternationalStandingOrderConsentsConsentIdPathParams;

  @Metadata()
  headers: GetInternationalStandingOrderConsentsConsentIdHeaders;

  @Metadata()
  security: GetInternationalStandingOrderConsentsConsentIdSecurity;
}


export class GetInternationalStandingOrderConsentsConsentIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obWriteInternationalStandingOrderConsentResponse7?: shared.ObWriteInternationalStandingOrderConsentResponse7;

  @Metadata()
  statusCode: number;
}
