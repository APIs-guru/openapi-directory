import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: number;
}


export class GetEventSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetEventDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventPathParams;

  @SpeakeasyMetadata()
  security: GetEventSecurity;
}


export class GetEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  event?: shared.Event;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEventDefaultApplicationJsonObject?: GetEventDefaultApplicationJson;
}
