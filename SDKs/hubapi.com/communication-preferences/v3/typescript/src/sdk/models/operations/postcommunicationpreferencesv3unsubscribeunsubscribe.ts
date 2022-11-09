import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption3;
}


export class PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PublicUpdateSubscriptionStatusRequest;

  @Metadata()
  security: PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity;
}


export class PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  publicSubscriptionStatus?: shared.PublicSubscriptionStatus;

  @Metadata()
  statusCode: number;
}
