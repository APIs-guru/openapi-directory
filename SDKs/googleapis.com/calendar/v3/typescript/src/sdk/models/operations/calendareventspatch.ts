import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CalendarEventsPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=calendarId" })
  calendarId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: string;
}

export enum CalendarEventsPatchSendUpdatesEnum {
    All = "all"
,    ExternalOnly = "externalOnly"
,    None = "none"
}


export class CalendarEventsPatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alwaysIncludeEmail" })
  alwaysIncludeEmail?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=conferenceDataVersion" })
  conferenceDataVersion?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxAttendees" })
  maxAttendees?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sendNotifications" })
  sendNotifications?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sendUpdates" })
  sendUpdates?: CalendarEventsPatchSendUpdatesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=supportsAttachments" })
  supportsAttachments?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class CalendarEventsPatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsPatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsPatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CalendarEventsPatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CalendarEventsPatchSecurityOption2;
}


export class CalendarEventsPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CalendarEventsPatchPathParams;

  @Metadata()
  queryParams: CalendarEventsPatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Event;

  @Metadata()
  security: CalendarEventsPatchSecurity;
}


export class CalendarEventsPatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  event?: shared.Event;

  @Metadata()
  statusCode: number;
}
