import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InternationalStandingOrderPaymentId" })
  internationalStandingOrderPaymentId: string;
}


export class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsHeaders extends SpeakeasyBase {
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


export class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsPathParams;

  @SpeakeasyMetadata()
  headers: GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsHeaders;

  @SpeakeasyMetadata()
  security: GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsSecurity;
}


export class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsResponse extends SpeakeasyBase {
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
