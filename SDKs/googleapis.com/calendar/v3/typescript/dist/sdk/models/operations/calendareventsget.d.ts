import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarEventsGetPathParams extends SpeakeasyBase {
    calendarId: string;
    eventId: string;
}
export declare class CalendarEventsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    alwaysIncludeEmail?: boolean;
    fields?: string;
    key?: string;
    maxAttendees?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    timeZone?: string;
    userIp?: string;
}
export declare class CalendarEventsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsGetSecurity extends SpeakeasyBase {
    option1?: CalendarEventsGetSecurityOption1;
    option2?: CalendarEventsGetSecurityOption2;
    option3?: CalendarEventsGetSecurityOption3;
    option4?: CalendarEventsGetSecurityOption4;
}
export declare class CalendarEventsGetRequest extends SpeakeasyBase {
    pathParams: CalendarEventsGetPathParams;
    queryParams: CalendarEventsGetQueryParams;
    security: CalendarEventsGetSecurity;
}
export declare class CalendarEventsGetResponse extends SpeakeasyBase {
    contentType: string;
    event?: shared.Event;
    statusCode: number;
}
