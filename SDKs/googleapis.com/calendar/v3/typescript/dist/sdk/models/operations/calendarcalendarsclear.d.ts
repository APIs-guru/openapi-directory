import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarCalendarsClearPathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare class CalendarCalendarsClearQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class CalendarCalendarsClearSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarCalendarsClearRequest extends SpeakeasyBase {
    pathParams: CalendarCalendarsClearPathParams;
    queryParams: CalendarCalendarsClearQueryParams;
    security: CalendarCalendarsClearSecurity;
}
export declare class CalendarCalendarsClearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
