import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CalendarCalendarListUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=calendarId" })
  calendarId: string;
}


export class CalendarCalendarListUpdateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=colorRgbFormat" })
  colorRgbFormat?: boolean;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class CalendarCalendarListUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarCalendarListUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CalendarCalendarListUpdatePathParams;

  @Metadata()
  queryParams: CalendarCalendarListUpdateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CalendarListEntry;

  @Metadata()
  security: CalendarCalendarListUpdateSecurity;
}


export class CalendarCalendarListUpdateResponse extends SpeakeasyBase {
  @Metadata()
  calendarListEntry?: shared.CalendarListEntry;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
