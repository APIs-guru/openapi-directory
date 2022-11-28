import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CalendarEventsWatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarId" })
  calendarId: string;
}

export enum CalendarEventsWatchOrderByEnum {
    StartTime = "startTime",
    Updated = "updated"
}


export class CalendarEventsWatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alwaysIncludeEmail" })
  alwaysIncludeEmail?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iCalUID" })
  iCalUid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAttendees" })
  maxAttendees?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: CalendarEventsWatchOrderByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=privateExtendedProperty" })
  privateExtendedProperty?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharedExtendedProperty" })
  sharedExtendedProperty?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" })
  showDeleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showHiddenInvitations" })
  showHiddenInvitations?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=singleEvents" })
  singleEvents?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=syncToken" })
  syncToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeMax" })
  timeMax?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeMin" })
  timeMin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedMin" })
  updatedMin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class CalendarEventsWatchSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsWatchSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsWatchSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsWatchSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsWatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CalendarEventsWatchSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CalendarEventsWatchSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: CalendarEventsWatchSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: CalendarEventsWatchSecurityOption4;
}


export class CalendarEventsWatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CalendarEventsWatchPathParams;

  @SpeakeasyMetadata()
  queryParams: CalendarEventsWatchQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Channel;

  @SpeakeasyMetadata()
  security: CalendarEventsWatchSecurity;
}


export class CalendarEventsWatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  channel?: shared.Channel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
