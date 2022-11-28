import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarEventsImportPathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare class CalendarEventsImportQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    conferenceDataVersion?: number;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    supportsAttachments?: boolean;
    userIp?: string;
}
export declare class CalendarEventsImportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsImportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsImportSecurity extends SpeakeasyBase {
    option1?: CalendarEventsImportSecurityOption1;
    option2?: CalendarEventsImportSecurityOption2;
}
export declare class CalendarEventsImportRequest extends SpeakeasyBase {
    pathParams: CalendarEventsImportPathParams;
    queryParams: CalendarEventsImportQueryParams;
    request?: shared.Event;
    security: CalendarEventsImportSecurity;
}
export declare class CalendarEventsImportResponse extends SpeakeasyBase {
    contentType: string;
    event?: shared.Event;
    statusCode: number;
}
