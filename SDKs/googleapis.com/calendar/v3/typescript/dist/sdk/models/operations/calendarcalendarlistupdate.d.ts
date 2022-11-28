import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarCalendarListUpdatePathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare class CalendarCalendarListUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    colorRgbFormat?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class CalendarCalendarListUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarCalendarListUpdateRequest extends SpeakeasyBase {
    pathParams: CalendarCalendarListUpdatePathParams;
    queryParams: CalendarCalendarListUpdateQueryParams;
    request?: shared.CalendarListEntry;
    security: CalendarCalendarListUpdateSecurity;
}
export declare class CalendarCalendarListUpdateResponse extends SpeakeasyBase {
    calendarListEntry?: shared.CalendarListEntry;
    contentType: string;
    statusCode: number;
}
