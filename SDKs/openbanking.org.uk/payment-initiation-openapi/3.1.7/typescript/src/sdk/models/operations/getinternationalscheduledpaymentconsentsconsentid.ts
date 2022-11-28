import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInternationalScheduledPaymentConsentsConsentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConsentId" })
  consentId: string;
}


export class GetInternationalScheduledPaymentConsentsConsentIdHeaders extends SpeakeasyBase {
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


export class GetInternationalScheduledPaymentConsentsConsentIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  tppoAuth2Security: shared.SchemeTppoAuth2Security;
}


export class GetInternationalScheduledPaymentConsentsConsentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInternationalScheduledPaymentConsentsConsentIdPathParams;

  @SpeakeasyMetadata()
  headers: GetInternationalScheduledPaymentConsentsConsentIdHeaders;

  @SpeakeasyMetadata()
  security: GetInternationalScheduledPaymentConsentsConsentIdSecurity;
}


export class GetInternationalScheduledPaymentConsentsConsentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  obWriteInternationalScheduledConsentResponse6?: shared.ObWriteInternationalScheduledConsentResponse6;

  @SpeakeasyMetadata()
  statusCode: number;
}
