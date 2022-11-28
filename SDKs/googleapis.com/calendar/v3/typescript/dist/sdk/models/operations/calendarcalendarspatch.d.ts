import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarCalendarsPatchPathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare class CalendarCalendarsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class CalendarCalendarsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarCalendarsPatchRequest extends SpeakeasyBase {
    pathParams: CalendarCalendarsPatchPathParams;
    queryParams: CalendarCalendarsPatchQueryParams;
    request?: shared.Calendar;
    security: CalendarCalendarsPatchSecurity;
}
export declare class CalendarCalendarsPatchResponse extends SpeakeasyBase {
    calendar?: shared.Calendar;
    contentType: string;
    statusCode: number;
}
