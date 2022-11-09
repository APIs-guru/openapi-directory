import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=InternationalStandingOrderPaymentId" })
  internationalStandingOrderPaymentId: string;
}


export class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsHeaders extends SpeakeasyBase {
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


export class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsPathParams;

  @Metadata()
  headers: GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsHeaders;

  @Metadata()
  security: GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsSecurity;
}


export class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obWritePaymentDetailsResponse1?: shared.ObWritePaymentDetailsResponse1;

  @Metadata()
  statusCode: number;
}
