import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarCalendarListGetPathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare class CalendarCalendarListGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class CalendarCalendarListGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarCalendarListGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarCalendarListGetSecurity extends SpeakeasyBase {
    option1?: CalendarCalendarListGetSecurityOption1;
    option2?: CalendarCalendarListGetSecurityOption2;
}
export declare class CalendarCalendarListGetRequest extends SpeakeasyBase {
    pathParams: CalendarCalendarListGetPathParams;
    queryParams: CalendarCalendarListGetQueryParams;
    security: CalendarCalendarListGetSecurity;
}
export declare class CalendarCalendarListGetResponse extends SpeakeasyBase {
    calendarListEntry?: shared.CalendarListEntry;
    contentType: string;
    statusCode: number;
}
