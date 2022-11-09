import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EventSeenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: number;
}


export class EventSeenSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class EventSeenSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class EventSeenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: EventSeenSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: EventSeenSecurityOption2;
}


export class EventSeenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EventSeenPathParams;

  @Metadata()
  security: EventSeenSecurity;
}


export class EventSeenDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class EventSeenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  eventSeen200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  eventSeenDefaultApplicationJsonObject?: EventSeenDefaultApplicationJson;
}
