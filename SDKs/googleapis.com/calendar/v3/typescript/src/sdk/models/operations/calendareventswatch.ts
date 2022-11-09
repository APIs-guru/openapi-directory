import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CalendarEventsWatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=calendarId" })
  calendarId: string;
}

export enum CalendarEventsWatchOrderByEnum {
    StartTime = "startTime"
,    Updated = "updated"
}


export class CalendarEventsWatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alwaysIncludeEmail" })
  alwaysIncludeEmail?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=iCalUID" })
  iCalUid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxAttendees" })
  maxAttendees?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: CalendarEventsWatchOrderByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=privateExtendedProperty" })
  privateExtendedProperty?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sharedExtendedProperty" })
  sharedExtendedProperty?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=showDeleted" })
  showDeleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=showHiddenInvitations" })
  showHiddenInvitations?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=singleEvents" })
  singleEvents?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=syncToken" })
  syncToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeMax" })
  timeMax?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeMin" })
  timeMin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedMin" })
  updatedMin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class CalendarEventsWatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsWatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsWatchSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsWatchSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsWatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CalendarEventsWatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CalendarEventsWatchSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: CalendarEventsWatchSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: CalendarEventsWatchSecurityOption4;
}


export class CalendarEventsWatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CalendarEventsWatchPathParams;

  @Metadata()
  queryParams: CalendarEventsWatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Channel;

  @Metadata()
  security: CalendarEventsWatchSecurity;
}


export class CalendarEventsWatchResponse extends SpeakeasyBase {
  @Metadata()
  channel?: shared.Channel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
