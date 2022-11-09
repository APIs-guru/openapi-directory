import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CalendarEventsMovePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=calendarId" })
  calendarId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: string;
}

export enum CalendarEventsMoveSendUpdatesEnum {
    All = "all"
,    ExternalOnly = "externalOnly"
,    None = "none"
}


export class CalendarEventsMoveQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=destination" })
  destination: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sendNotifications" })
  sendNotifications?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sendUpdates" })
  sendUpdates?: CalendarEventsMoveSendUpdatesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class CalendarEventsMoveSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsMoveSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsMoveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CalendarEventsMoveSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CalendarEventsMoveSecurityOption2;
}


export class CalendarEventsMoveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CalendarEventsMovePathParams;

  @Metadata()
  queryParams: CalendarEventsMoveQueryParams;

  @Metadata()
  security: CalendarEventsMoveSecurity;
}


export class CalendarEventsMoveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  event?: shared.Event;

  @Metadata()
  statusCode: number;
}
