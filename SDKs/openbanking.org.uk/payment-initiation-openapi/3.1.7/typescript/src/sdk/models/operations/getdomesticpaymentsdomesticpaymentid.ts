import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDomesticPaymentsDomesticPaymentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomesticPaymentId" })
  domesticPaymentId: string;
}


export class GetDomesticPaymentsDomesticPaymentIdHeaders extends SpeakeasyBase {
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


export class GetDomesticPaymentsDomesticPaymentIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetDomesticPaymentsDomesticPaymentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDomesticPaymentsDomesticPaymentIdPathParams;

  @Metadata()
  headers: GetDomesticPaymentsDomesticPaymentIdHeaders;

  @Metadata()
  security: GetDomesticPaymentsDomesticPaymentIdSecurity;
}


export class GetDomesticPaymentsDomesticPaymentIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obWriteDomesticResponse5?: shared.ObWriteDomesticResponse5;

  @Metadata()
  statusCode: number;
}
