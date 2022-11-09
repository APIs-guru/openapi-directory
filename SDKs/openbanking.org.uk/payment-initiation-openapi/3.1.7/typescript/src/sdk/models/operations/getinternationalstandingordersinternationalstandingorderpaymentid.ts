import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=InternationalStandingOrderPaymentId" })
  internationalStandingOrderPaymentId: string;
}


export class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdHeaders extends SpeakeasyBase {
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


export class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPathParams;

  @Metadata()
  headers: GetInternationalStandingOrdersInternationalStandingOrderPaymentIdHeaders;

  @Metadata()
  security: GetInternationalStandingOrdersInternationalStandingOrderPaymentIdSecurity;
}


export class GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obWriteInternationalStandingOrderResponse7?: shared.ObWriteInternationalStandingOrderResponse7;

  @Metadata()
  statusCode: number;
}
