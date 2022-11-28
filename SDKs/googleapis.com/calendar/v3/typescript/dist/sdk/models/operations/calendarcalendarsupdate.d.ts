import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarCalendarsUpdatePathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare class CalendarCalendarsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class CalendarCalendarsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarCalendarsUpdateRequest extends SpeakeasyBase {
    pathParams: CalendarCalendarsUpdatePathParams;
    queryParams: CalendarCalendarsUpdateQueryParams;
    request?: shared.Calendar;
    security: CalendarCalendarsUpdateSecurity;
}
export declare class CalendarCalendarsUpdateResponse extends SpeakeasyBase {
    calendar?: shared.Calendar;
    contentType: string;
    statusCode: number;
}
