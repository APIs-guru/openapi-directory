import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomesticStandingOrderId" })
  domesticStandingOrderId: string;
}


export class GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsHeaders extends SpeakeasyBase {
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


export class GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsPathParams;

  @SpeakeasyMetadata()
  headers: GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsHeaders;

  @SpeakeasyMetadata()
  security: GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsSecurity;
}


export class GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obWritePaymentDetailsResponse1?: shared.ObWritePaymentDetailsResponse1;

  @SpeakeasyMetadata()
  statusCode: number;
}
