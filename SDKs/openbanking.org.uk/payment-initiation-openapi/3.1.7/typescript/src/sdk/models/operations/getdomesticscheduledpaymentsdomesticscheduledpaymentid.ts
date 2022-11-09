import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomesticScheduledPaymentId" })
  domesticScheduledPaymentId: string;
}


export class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders extends SpeakeasyBase {
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


export class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPathParams;

  @Metadata()
  headers: GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders;

  @Metadata()
  security: GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity;
}


export class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obWriteDomesticScheduledResponse5?: shared.ObWriteDomesticScheduledResponse5;

  @Metadata()
  statusCode: number;
}
