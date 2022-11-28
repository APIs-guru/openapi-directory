import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarEventsPatchPathParams extends SpeakeasyBase {
    calendarId: string;
    eventId: string;
}
export declare enum CalendarEventsPatchSendUpdatesEnum {
    All = "all",
    ExternalOnly = "externalOnly",
    None = "none"
}
export declare class CalendarEventsPatchQueryParams extends SpeakeasyBase {
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
    sendUpdates?: CalendarEventsPatchSendUpdatesEnum;
    supportsAttachments?: boolean;
    userIp?: string;
}
export declare class CalendarEventsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsPatchSecurity extends SpeakeasyBase {
    option1?: CalendarEventsPatchSecurityOption1;
    option2?: CalendarEventsPatchSecurityOption2;
}
export declare class CalendarEventsPatchRequest extends SpeakeasyBase {
    pathParams: CalendarEventsPatchPathParams;
    queryParams: CalendarEventsPatchQueryParams;
    request?: shared.Event;
    security: CalendarEventsPatchSecurity;
}
export declare class CalendarEventsPatchResponse extends SpeakeasyBase {
    contentType: string;
    event?: shared.Event;
    statusCode: number;
}
