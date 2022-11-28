import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarEventsWatchPathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare enum CalendarEventsWatchOrderByEnum {
    StartTime = "startTime",
    Updated = "updated"
}
export declare class CalendarEventsWatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    alwaysIncludeEmail?: boolean;
    fields?: string;
    iCalUid?: string;
    key?: string;
    maxAttendees?: number;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: CalendarEventsWatchOrderByEnum;
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
export declare class CalendarEventsWatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsWatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsWatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsWatchSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsWatchSecurity extends SpeakeasyBase {
    option1?: CalendarEventsWatchSecurityOption1;
    option2?: CalendarEventsWatchSecurityOption2;
    option3?: CalendarEventsWatchSecurityOption3;
    option4?: CalendarEventsWatchSecurityOption4;
}
export declare class CalendarEventsWatchRequest extends SpeakeasyBase {
    pathParams: CalendarEventsWatchPathParams;
    queryParams: CalendarEventsWatchQueryParams;
    request?: shared.Channel;
    security: CalendarEventsWatchSecurity;
}
export declare class CalendarEventsWatchResponse extends SpeakeasyBase {
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
}
