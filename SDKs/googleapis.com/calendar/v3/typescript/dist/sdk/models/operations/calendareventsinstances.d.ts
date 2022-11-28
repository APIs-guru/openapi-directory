import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarEventsInstancesPathParams extends SpeakeasyBase {
    calendarId: string;
    eventId: string;
}
export declare class CalendarEventsInstancesQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    alwaysIncludeEmail?: boolean;
    fields?: string;
    key?: string;
    maxAttendees?: number;
    maxResults?: number;
    oauthToken?: string;
    originalStart?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showDeleted?: boolean;
    timeMax?: string;
    timeMin?: string;
    timeZone?: string;
    userIp?: string;
}
export declare class CalendarEventsInstancesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsInstancesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsInstancesSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsInstancesSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarEventsInstancesSecurity extends SpeakeasyBase {
    option1?: CalendarEventsInstancesSecurityOption1;
    option2?: CalendarEventsInstancesSecurityOption2;
    option3?: CalendarEventsInstancesSecurityOption3;
    option4?: CalendarEventsInstancesSecurityOption4;
}
export declare class CalendarEventsInstancesRequest extends SpeakeasyBase {
    pathParams: CalendarEventsInstancesPathParams;
    queryParams: CalendarEventsInstancesQueryParams;
    security: CalendarEventsInstancesSecurity;
}
export declare class CalendarEventsInstancesResponse extends SpeakeasyBase {
    contentType: string;
    events?: shared.Events;
    statusCode: number;
}
