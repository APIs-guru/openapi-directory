import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCommunicationPreferencesV3DefinitionsGetPageSecurity extends SpeakeasyBase {
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


export class GetCommunicationPreferencesV3DefinitionsGetPageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetCommunicationPreferencesV3DefinitionsGetPageSecurity;
}


export class GetCommunicationPreferencesV3DefinitionsGetPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscriptionDefinitionsResponse?: shared.SubscriptionDefinitionsResponse;
}
