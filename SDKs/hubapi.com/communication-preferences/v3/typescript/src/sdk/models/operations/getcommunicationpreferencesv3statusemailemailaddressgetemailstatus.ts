import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=emailAddress" })
  emailAddress: string;
}


export class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy1?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy1?: shared.SchemeOauth2Legacy;
}


export class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams;

  @SpeakeasyMetadata()
  security: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity;
}


export class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  publicSubscriptionStatusesResponse?: shared.PublicSubscriptionStatusesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
