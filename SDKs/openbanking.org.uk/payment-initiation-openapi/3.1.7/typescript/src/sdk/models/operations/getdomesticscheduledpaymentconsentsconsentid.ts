import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDomesticScheduledPaymentConsentsConsentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" })
  consentId: string;
}


export class GetDomesticScheduledPaymentConsentsConsentIdHeaders extends SpeakeasyBase {
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


export class GetDomesticScheduledPaymentConsentsConsentIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetDomesticScheduledPaymentConsentsConsentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDomesticScheduledPaymentConsentsConsentIdPathParams;

  @SpeakeasyMetadata()
  headers: GetDomesticScheduledPaymentConsentsConsentIdHeaders;

  @SpeakeasyMetadata()
  security: GetDomesticScheduledPaymentConsentsConsentIdSecurity;
}


export class GetDomesticScheduledPaymentConsentsConsentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obWriteDomesticScheduledConsentResponse5?: shared.ObWriteDomesticScheduledConsentResponse5;

  @SpeakeasyMetadata()
  statusCode: number;
}
