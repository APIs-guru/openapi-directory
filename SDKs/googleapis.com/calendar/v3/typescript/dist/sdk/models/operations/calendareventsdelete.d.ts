import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarEventsDeletePathParams extends SpeakeasyBase {
    calendarId: string;
    eventId: string;
}
export declare enum CalendarEventsDeleteSendUpdatesEnum {
    All = "all",
    ExternalOnly = "externalOnly",
    None = "none"
}
export declare class CalendarEventsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sendNotifications?: boolean;
    sendUpdates?: CalendarEventsDeleteSendUpdatesEnum;
    userIp?: string;
}
export declare class CalendarEventsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsDeleteSecurity extends SpeakeasyBase {
    option1?: CalendarEventsDeleteSecurityOption1;
    option2?: CalendarEventsDeleteSecurityOption2;
}
export declare class CalendarEventsDeleteRequest extends SpeakeasyBase {
    pathParams: CalendarEventsDeletePathParams;
    queryParams: CalendarEventsDeleteQueryParams;
    security: CalendarEventsDeleteSecurity;
}
export declare class CalendarEventsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
