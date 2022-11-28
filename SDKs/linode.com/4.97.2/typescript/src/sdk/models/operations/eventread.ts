import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EventReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: number;
}


export class EventReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class EventReadDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class EventReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EventReadPathParams;

  @SpeakeasyMetadata()
  security: EventReadSecurity;
}


export class EventReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  eventRead200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  eventReadDefaultApplicationJsonObject?: EventReadDefaultApplicationJson;
}
