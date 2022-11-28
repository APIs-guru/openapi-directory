import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CalendarEventsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarId" })
  calendarId: string;
}

export enum CalendarEventsListOrderByEnum {
    StartTime = "startTime",
    Updated = "updated"
}


export class CalendarEventsListQueryParams extends SpeakeasyBase {
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
  orderBy?: CalendarEventsListOrderByEnum;

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


export class CalendarEventsListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsListSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsListSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CalendarEventsListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CalendarEventsListSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: CalendarEventsListSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: CalendarEventsListSecurityOption4;
}


export class CalendarEventsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CalendarEventsListPathParams;

  @SpeakeasyMetadata()
  queryParams: CalendarEventsListQueryParams;

  @SpeakeasyMetadata()
  security: CalendarEventsListSecurity;
}


export class CalendarEventsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  events?: shared.Events;

  @SpeakeasyMetadata()
  statusCode: number;
}
