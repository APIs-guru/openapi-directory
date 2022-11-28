import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarCalendarListInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    colorRgbFormat?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class CalendarCalendarListInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarCalendarListInsertRequest extends SpeakeasyBase {
    queryParams: CalendarCalendarListInsertQueryParams;
    request?: shared.CalendarListEntry;
    security: CalendarCalendarListInsertSecurity;
}
export declare class CalendarCalendarListInsertResponse extends SpeakeasyBase {
    calendarListEntry?: shared.CalendarListEntry;
    contentType: string;
    statusCode: number;
}
