import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarCalendarsDeletePathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare class CalendarCalendarsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class CalendarCalendarsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarCalendarsDeleteRequest extends SpeakeasyBase {
    pathParams: CalendarCalendarsDeletePathParams;
    queryParams: CalendarCalendarsDeleteQueryParams;
    security: CalendarCalendarsDeleteSecurity;
}
export declare class CalendarCalendarsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
