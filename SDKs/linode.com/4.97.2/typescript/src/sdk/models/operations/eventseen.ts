import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EventSeenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: number;
}


export class EventSeenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class EventSeenDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class EventSeenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EventSeenPathParams;

  @SpeakeasyMetadata()
  security: EventSeenSecurity;
}


export class EventSeenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  eventSeen200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  eventSeenDefaultApplicationJsonObject?: EventSeenDefaultApplicationJson;
}
