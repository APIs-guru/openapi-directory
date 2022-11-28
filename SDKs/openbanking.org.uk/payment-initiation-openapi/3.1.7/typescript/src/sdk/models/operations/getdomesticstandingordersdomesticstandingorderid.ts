import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDomesticStandingOrdersDomesticStandingOrderIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomesticStandingOrderId" })
  domesticStandingOrderId: string;
}


export class GetDomesticStandingOrdersDomesticStandingOrderIdHeaders extends SpeakeasyBase {
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


export class GetDomesticStandingOrdersDomesticStandingOrderIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetDomesticStandingOrdersDomesticStandingOrderIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDomesticStandingOrdersDomesticStandingOrderIdPathParams;

  @SpeakeasyMetadata()
  headers: GetDomesticStandingOrdersDomesticStandingOrderIdHeaders;

  @SpeakeasyMetadata()
  security: GetDomesticStandingOrdersDomesticStandingOrderIdSecurity;
}


export class GetDomesticStandingOrdersDomesticStandingOrderIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obWriteDomesticStandingOrderResponse6?: shared.ObWriteDomesticStandingOrderResponse6;

  @SpeakeasyMetadata()
  statusCode: number;
}
