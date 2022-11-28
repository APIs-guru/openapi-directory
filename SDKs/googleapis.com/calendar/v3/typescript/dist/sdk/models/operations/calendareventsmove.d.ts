import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarEventsMovePathParams extends SpeakeasyBase {
    calendarId: string;
    eventId: string;
}
export declare enum CalendarEventsMoveSendUpdatesEnum {
    All = "all",
    ExternalOnly = "externalOnly",
    None = "none"
}
export declare class CalendarEventsMoveQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    destination: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sendNotifications?: boolean;
    sendUpdates?: CalendarEventsMoveSendUpdatesEnum;
    userIp?: string;
}
export declare class CalendarEventsMoveSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsMoveSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsMoveSecurity extends SpeakeasyBase {
    option1?: CalendarEventsMoveSecurityOption1;
    option2?: CalendarEventsMoveSecurityOption2;
}
export declare class CalendarEventsMoveRequest extends SpeakeasyBase {
    pathParams: CalendarEventsMovePathParams;
    queryParams: CalendarEventsMoveQueryParams;
    security: CalendarEventsMoveSecurity;
}
export declare class CalendarEventsMoveResponse extends SpeakeasyBase {
    contentType: string;
    event?: shared.Event;
    statusCode: number;
}
