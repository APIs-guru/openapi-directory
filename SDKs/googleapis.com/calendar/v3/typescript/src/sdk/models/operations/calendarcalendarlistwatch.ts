import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CalendarCalendarListWatchMinAccessRoleEnum {
    FreeBusyReader = "freeBusyReader"
,    Owner = "owner"
,    Reader = "reader"
,    Writer = "writer"
}


export class CalendarCalendarListWatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minAccessRole" })
  minAccessRole?: CalendarCalendarListWatchMinAccessRoleEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=showDeleted" })
  showDeleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=showHidden" })
  showHidden?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=syncToken" })
  syncToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class CalendarCalendarListWatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarCalendarListWatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarCalendarListWatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CalendarCalendarListWatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CalendarCalendarListWatchSecurityOption2;
}


export class CalendarCalendarListWatchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CalendarCalendarListWatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Channel;

  @Metadata()
  security: CalendarCalendarListWatchSecurity;
}


export class CalendarCalendarListWatchResponse extends SpeakeasyBase {
  @Metadata()
  channel?: shared.Channel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
