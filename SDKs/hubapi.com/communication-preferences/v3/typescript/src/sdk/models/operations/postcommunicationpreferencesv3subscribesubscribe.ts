import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostCommunicationPreferencesV3SubscribeSubscribeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption3;
}


export class PostCommunicationPreferencesV3SubscribeSubscribeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PublicUpdateSubscriptionStatusRequest;

  @Metadata()
  security: PostCommunicationPreferencesV3SubscribeSubscribeSecurity;
}


export class PostCommunicationPreferencesV3SubscribeSubscribeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  publicSubscriptionStatus?: shared.PublicSubscriptionStatus;

  @Metadata()
  statusCode: number;
}
