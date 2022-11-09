import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EventReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: number;
}


export class EventReadSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class EventReadSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class EventReadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: EventReadSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: EventReadSecurityOption2;
}


export class EventReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EventReadPathParams;

  @Metadata()
  security: EventReadSecurity;
}


export class EventReadDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class EventReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  eventRead200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  eventReadDefaultApplicationJsonObject?: EventReadDefaultApplicationJson;
}
