import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDomesticStandingOrdersDomesticStandingOrderIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomesticStandingOrderId" })
  domesticStandingOrderId: string;
}


export class GetDomesticStandingOrdersDomesticStandingOrderIdHeaders extends SpeakeasyBase {
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


export class GetDomesticStandingOrdersDomesticStandingOrderIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetDomesticStandingOrdersDomesticStandingOrderIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDomesticStandingOrdersDomesticStandingOrderIdPathParams;

  @Metadata()
  headers: GetDomesticStandingOrdersDomesticStandingOrderIdHeaders;

  @Metadata()
  security: GetDomesticStandingOrdersDomesticStandingOrderIdSecurity;
}


export class GetDomesticStandingOrdersDomesticStandingOrderIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obWriteDomesticStandingOrderResponse6?: shared.ObWriteDomesticStandingOrderResponse6;

  @Metadata()
  statusCode: number;
}
