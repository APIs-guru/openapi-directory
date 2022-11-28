import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAccountAccessConsentsConsentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=consentId" })
  consentId: string;
}


export class DeleteAccountAccessConsentsConsentIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=sandbox-id" })
  sandboxId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-customer-user-agent" })
  xCustomerUserAgent?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-auth-date" })
  xFapiAuthDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-customer-ip-address" })
  xFapiCustomerIpAddress?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-fapi-interaction-id" })
  xFapiInteractionId?: string;
}


export class DeleteAccountAccessConsentsConsentIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  clientCredentialsToken: shared.SchemeClientCredentialsToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class DeleteAccountAccessConsentsConsentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAccountAccessConsentsConsentIdPathParams;

  @SpeakeasyMetadata()
  headers: DeleteAccountAccessConsentsConsentIdHeaders;

  @SpeakeasyMetadata()
  security: DeleteAccountAccessConsentsConsentIdSecurity;
}


export class DeleteAccountAccessConsentsConsentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  obErrorResponse1?: shared.ObErrorResponse1;

  @SpeakeasyMetadata()
  statusCode: number;
}
