import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=InternationalScheduledPaymentId" })
  internationalScheduledPaymentId: string;
}


export class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders extends SpeakeasyBase {
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


export class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPathParams;

  @Metadata()
  headers: GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders;

  @Metadata()
  security: GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity;
}


export class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @Metadata()
  obWriteInternationalScheduledResponse6?: shared.ObWriteInternationalScheduledResponse6;

  @Metadata()
  statusCode: number;
}
