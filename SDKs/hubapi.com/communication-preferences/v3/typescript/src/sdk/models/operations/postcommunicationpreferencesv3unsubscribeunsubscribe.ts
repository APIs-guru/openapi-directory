import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy1?: shared.SchemeOauth2Legacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy1?: shared.SchemePrivateAppsLegacy;
}


export class PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PublicUpdateSubscriptionStatusRequest;

  @SpeakeasyMetadata()
  security: PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity;
}


export class PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  publicSubscriptionStatus?: shared.PublicSubscriptionStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}
