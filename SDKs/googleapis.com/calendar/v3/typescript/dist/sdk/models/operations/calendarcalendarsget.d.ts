import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarCalendarsGetPathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare class CalendarCalendarsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class CalendarCalendarsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarCalendarsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarCalendarsGetSecurity extends SpeakeasyBase {
    option1?: CalendarCalendarsGetSecurityOption1;
    option2?: CalendarCalendarsGetSecurityOption2;
}
export declare class CalendarCalendarsGetRequest extends SpeakeasyBase {
    pathParams: CalendarCalendarsGetPathParams;
    queryParams: CalendarCalendarsGetQueryParams;
    security: CalendarCalendarsGetSecurity;
}
export declare class CalendarCalendarsGetResponse extends SpeakeasyBase {
    calendar?: shared.Calendar;
    contentType: string;
    statusCode: number;
}
