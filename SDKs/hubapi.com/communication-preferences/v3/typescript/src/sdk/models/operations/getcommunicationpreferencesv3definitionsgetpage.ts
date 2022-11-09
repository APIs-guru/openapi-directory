import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetCommunicationPreferencesV3DefinitionsGetPageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption3;
}


export class GetCommunicationPreferencesV3DefinitionsGetPageRequest extends SpeakeasyBase {
  @Metadata()
  security: GetCommunicationPreferencesV3DefinitionsGetPageSecurity;
}


export class GetCommunicationPreferencesV3DefinitionsGetPageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscriptionDefinitionsResponse?: shared.SubscriptionDefinitionsResponse;
}
