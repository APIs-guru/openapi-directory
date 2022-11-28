import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomesticScheduledPaymentId" })
  domesticScheduledPaymentId: string;
}


export class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders extends SpeakeasyBase {
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


export class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPathParams;

  @SpeakeasyMetadata()
  headers: GetDomesticScheduledPaymentsDomesticScheduledPaymentIdHeaders;

  @SpeakeasyMetadata()
  security: GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity;
}


export class GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obWriteDomesticScheduledResponse5?: shared.ObWriteDomesticScheduledResponse5;

  @SpeakeasyMetadata()
  statusCode: number;
}
