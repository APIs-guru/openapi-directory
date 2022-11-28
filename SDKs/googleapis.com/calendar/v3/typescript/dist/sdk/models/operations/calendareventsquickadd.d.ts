import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarEventsQuickAddPathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare enum CalendarEventsQuickAddSendUpdatesEnum {
    All = "all",
    ExternalOnly = "externalOnly",
    None = "none"
}
export declare class CalendarEventsQuickAddQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sendNotifications?: boolean;
    sendUpdates?: CalendarEventsQuickAddSendUpdatesEnum;
    text: string;
    userIp?: string;
}
export declare class CalendarEventsQuickAddSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsQuickAddSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsQuickAddSecurity extends SpeakeasyBase {
    option1?: CalendarEventsQuickAddSecurityOption1;
    option2?: CalendarEventsQuickAddSecurityOption2;
}
export declare class CalendarEventsQuickAddRequest extends SpeakeasyBase {
    pathParams: CalendarEventsQuickAddPathParams;
    queryParams: CalendarEventsQuickAddQueryParams;
    security: CalendarEventsQuickAddSecurity;
}
export declare class CalendarEventsQuickAddResponse extends SpeakeasyBase {
    contentType: string;
    event?: shared.Event;
    statusCode: number;
}
