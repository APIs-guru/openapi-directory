import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InternationalScheduledPaymentId" })
  internationalScheduledPaymentId: string;
}


export class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders extends SpeakeasyBase {
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


export class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPathParams;

  @SpeakeasyMetadata()
  headers: GetInternationalScheduledPaymentsInternationalScheduledPaymentIdHeaders;

  @SpeakeasyMetadata()
  security: GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity;
}


export class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obWriteInternationalScheduledResponse6?: shared.ObWriteInternationalScheduledResponse6;

  @SpeakeasyMetadata()
  statusCode: number;
}
