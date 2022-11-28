import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CalendarCalendarListListMinAccessRoleEnum {
    FreeBusyReader = "freeBusyReader",
    Owner = "owner",
    Reader = "reader",
    Writer = "writer"
}
export declare class CalendarCalendarListListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    minAccessRole?: CalendarCalendarListListMinAccessRoleEnum;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showDeleted?: boolean;
    showHidden?: boolean;
    syncToken?: string;
    userIp?: string;
}
export declare class CalendarCalendarListListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarCalendarListListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarCalendarListListSecurity extends SpeakeasyBase {
    option1?: CalendarCalendarListListSecurityOption1;
    option2?: CalendarCalendarListListSecurityOption2;
}
export declare class CalendarCalendarListListRequest extends SpeakeasyBase {
    queryParams: CalendarCalendarListListQueryParams;
    security: CalendarCalendarListListSecurity;
}
export declare class CalendarCalendarListListResponse extends SpeakeasyBase {
    calendarList?: shared.CalendarList;
    contentType: string;
    statusCode: number;
}
