import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InternationalScheduledPaymentId" })
  internationalScheduledPaymentId: string;
}


export class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsHeaders extends SpeakeasyBase {
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


export class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsPathParams;

  @SpeakeasyMetadata()
  headers: GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsHeaders;

  @SpeakeasyMetadata()
  security: GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsSecurity;
}


export class GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse extends SpeakeasyBase {
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
