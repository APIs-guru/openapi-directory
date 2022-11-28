import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarEventsListPathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare enum CalendarEventsListOrderByEnum {
    StartTime = "startTime",
    Updated = "updated"
}
export declare class CalendarEventsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    alwaysIncludeEmail?: boolean;
    fields?: string;
    iCalUid?: string;
    key?: string;
    maxAttendees?: number;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: CalendarEventsListOrderByEnum;
    pageToken?: string;
    prettyPrint?: boolean;
    privateExtendedProperty?: string[];
    q?: string;
    quotaUser?: string;
    sharedExtendedProperty?: string[];
    showDeleted?: boolean;
    showHiddenInvitations?: boolean;
    singleEvents?: boolean;
    syncToken?: string;
    timeMax?: string;
    timeMin?: string;
    timeZone?: string;
    updatedMin?: string;
    userIp?: string;
}
export declare class CalendarEventsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsListSecurity extends SpeakeasyBase {
    option1?: CalendarEventsListSecurityOption1;
    option2?: CalendarEventsListSecurityOption2;
    option3?: CalendarEventsListSecurityOption3;
    option4?: CalendarEventsListSecurityOption4;
}
export declare class CalendarEventsListRequest extends SpeakeasyBase {
    pathParams: CalendarEventsListPathParams;
    queryParams: CalendarEventsListQueryParams;
    security: CalendarEventsListSecurity;
}
export declare class CalendarEventsListResponse extends SpeakeasyBase {
    contentType: string;
    events?: shared.Events;
    statusCode: number;
}
