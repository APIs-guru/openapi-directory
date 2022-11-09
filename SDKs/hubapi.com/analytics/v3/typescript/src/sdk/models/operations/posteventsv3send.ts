import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostEventsV3SendSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostEventsV3SendSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostEventsV3SendSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostEventsV3SendSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostEventsV3SendSecurityOption2;
}


export class PostEventsV3SendRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BehavioralEventHttpCompletionRequest;

  @Metadata()
  security: PostEventsV3SendSecurity;
}


export class PostEventsV3SendResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
