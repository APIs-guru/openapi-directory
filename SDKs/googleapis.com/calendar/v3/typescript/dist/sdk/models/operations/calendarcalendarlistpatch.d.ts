import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarCalendarListPatchPathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare class CalendarCalendarListPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    colorRgbFormat?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class CalendarCalendarListPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarCalendarListPatchRequest extends SpeakeasyBase {
    pathParams: CalendarCalendarListPatchPathParams;
    queryParams: CalendarCalendarListPatchQueryParams;
    request?: shared.CalendarListEntry;
    security: CalendarCalendarListPatchSecurity;
}
export declare class CalendarCalendarListPatchResponse extends SpeakeasyBase {
    calendarListEntry?: shared.CalendarListEntry;
    contentType: string;
    statusCode: number;
}
