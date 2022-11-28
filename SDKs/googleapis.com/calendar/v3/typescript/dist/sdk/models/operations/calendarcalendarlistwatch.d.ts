import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CalendarCalendarListWatchMinAccessRoleEnum {
    FreeBusyReader = "freeBusyReader",
    Owner = "owner",
    Reader = "reader",
    Writer = "writer"
}
export declare class CalendarCalendarListWatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    minAccessRole?: CalendarCalendarListWatchMinAccessRoleEnum;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showDeleted?: boolean;
    showHidden?: boolean;
    syncToken?: string;
    userIp?: string;
}
export declare class CalendarCalendarListWatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarCalendarListWatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarCalendarListWatchSecurity extends SpeakeasyBase {
    option1?: CalendarCalendarListWatchSecurityOption1;
    option2?: CalendarCalendarListWatchSecurityOption2;
}
export declare class CalendarCalendarListWatchRequest extends SpeakeasyBase {
    queryParams: CalendarCalendarListWatchQueryParams;
    request?: shared.Channel;
    security: CalendarCalendarListWatchSecurity;
}
export declare class CalendarCalendarListWatchResponse extends SpeakeasyBase {
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
}
