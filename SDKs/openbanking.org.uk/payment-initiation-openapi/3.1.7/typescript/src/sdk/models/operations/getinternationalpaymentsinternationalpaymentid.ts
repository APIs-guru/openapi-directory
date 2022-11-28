import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInternationalPaymentsInternationalPaymentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InternationalPaymentId" })
  internationalPaymentId: string;
}


export class GetInternationalPaymentsInternationalPaymentIdHeaders extends SpeakeasyBase {
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


export class GetInternationalPaymentsInternationalPaymentIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetInternationalPaymentsInternationalPaymentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInternationalPaymentsInternationalPaymentIdPathParams;

  @SpeakeasyMetadata()
  headers: GetInternationalPaymentsInternationalPaymentIdHeaders;

  @SpeakeasyMetadata()
  security: GetInternationalPaymentsInternationalPaymentIdSecurity;
}


export class GetInternationalPaymentsInternationalPaymentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obWriteInternationalResponse5?: shared.ObWriteInternationalResponse5;

  @SpeakeasyMetadata()
  statusCode: number;
}
