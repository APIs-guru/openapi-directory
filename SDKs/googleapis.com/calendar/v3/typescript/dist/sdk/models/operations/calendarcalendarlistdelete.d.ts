import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarCalendarListDeletePathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare class CalendarCalendarListDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class CalendarCalendarListDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarCalendarListDeleteRequest extends SpeakeasyBase {
    pathParams: CalendarCalendarListDeletePathParams;
    queryParams: CalendarCalendarListDeleteQueryParams;
    security: CalendarCalendarListDeleteSecurity;
}
export declare class CalendarCalendarListDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
