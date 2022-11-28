import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CalendarEventsPatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarId" })
  calendarId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: string;
}

export enum CalendarEventsPatchSendUpdatesEnum {
    All = "all",
    ExternalOnly = "externalOnly",
    None = "none"
}


export class CalendarEventsPatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alwaysIncludeEmail" })
  alwaysIncludeEmail?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conferenceDataVersion" })
  conferenceDataVersion?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAttendees" })
  maxAttendees?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendNotifications" })
  sendNotifications?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendUpdates" })
  sendUpdates?: CalendarEventsPatchSendUpdatesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAttachments" })
  supportsAttachments?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class CalendarEventsPatchSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsPatchSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarEventsPatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CalendarEventsPatchSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CalendarEventsPatchSecurityOption2;
}


export class CalendarEventsPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CalendarEventsPatchPathParams;

  @SpeakeasyMetadata()
  queryParams: CalendarEventsPatchQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Event;

  @SpeakeasyMetadata()
  security: CalendarEventsPatchSecurity;
}


export class CalendarEventsPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  event?: shared.Event;

  @SpeakeasyMetadata()
  statusCode: number;
}
