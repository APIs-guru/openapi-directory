import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarEventsInsertPathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare enum CalendarEventsInsertSendUpdatesEnum {
    All = "all",
    ExternalOnly = "externalOnly",
    None = "none"
}
export declare class CalendarEventsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    conferenceDataVersion?: number;
    fields?: string;
    key?: string;
    maxAttendees?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sendNotifications?: boolean;
    sendUpdates?: CalendarEventsInsertSendUpdatesEnum;
    supportsAttachments?: boolean;
    userIp?: string;
}
export declare class CalendarEventsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsInsertSecurity extends SpeakeasyBase {
    option1?: CalendarEventsInsertSecurityOption1;
    option2?: CalendarEventsInsertSecurityOption2;
}
export declare class CalendarEventsInsertRequest extends SpeakeasyBase {
    pathParams: CalendarEventsInsertPathParams;
    queryParams: CalendarEventsInsertQueryParams;
    request?: shared.Event;
    security: CalendarEventsInsertSecurity;
}
export declare class CalendarEventsInsertResponse extends SpeakeasyBase {
    contentType: string;
    event?: shared.Event;
    statusCode: number;
}
