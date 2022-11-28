import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarEventsUpdatePathParams extends SpeakeasyBase {
    calendarId: string;
    eventId: string;
}
export declare enum CalendarEventsUpdateSendUpdatesEnum {
    All = "all",
    ExternalOnly = "externalOnly",
    None = "none"
}
export declare class CalendarEventsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    alwaysIncludeEmail?: boolean;
    conferenceDataVersion?: number;
    fields?: string;
    key?: string;
    maxAttendees?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sendNotifications?: boolean;
    sendUpdates?: CalendarEventsUpdateSendUpdatesEnum;
    supportsAttachments?: boolean;
    userIp?: string;
}
export declare class CalendarEventsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsUpdateSecurity extends SpeakeasyBase {
    option1?: CalendarEventsUpdateSecurityOption1;
    option2?: CalendarEventsUpdateSecurityOption2;
}
export declare class CalendarEventsUpdateRequest extends SpeakeasyBase {
    pathParams: CalendarEventsUpdatePathParams;
    queryParams: CalendarEventsUpdateQueryParams;
    request?: shared.Event;
    security: CalendarEventsUpdateSecurity;
}
export declare class CalendarEventsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    event?: shared.Event;
    statusCode: number;
}
