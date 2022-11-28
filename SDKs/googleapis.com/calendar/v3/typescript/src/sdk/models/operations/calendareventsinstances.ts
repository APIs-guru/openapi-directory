import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CalendarEventsInstancesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarId" })
  calendarId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: string;
}


export class CalendarEventsInstancesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alwaysIncludeEmail" })
  alwaysIncludeEmail?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAttendees" })
  maxAttendees?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=originalStart" })
  originalStart?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" })
  showDeleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeMax" })
  timeMax?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeMin" })
  timeMin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class CalendarEventsInstancesSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsInstancesSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsInstancesSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsInstancesSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsInstancesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CalendarEventsInstancesSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CalendarEventsInstancesSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: CalendarEventsInstancesSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: CalendarEventsInstancesSecurityOption4;
}


export class CalendarEventsInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CalendarEventsInstancesPathParams;

  @SpeakeasyMetadata()
  queryParams: CalendarEventsInstancesQueryParams;

  @SpeakeasyMetadata()
  security: CalendarEventsInstancesSecurity;
}


export class CalendarEventsInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  events?: shared.Events;

  @SpeakeasyMetadata()
  statusCode: number;
}
