import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarAclWatchPathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare class CalendarAclWatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showDeleted?: boolean;
    syncToken?: string;
    userIp?: string;
}
export declare class CalendarAclWatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarAclWatchRequest extends SpeakeasyBase {
    pathParams: CalendarAclWatchPathParams;
    queryParams: CalendarAclWatchQueryParams;
    request?: shared.Channel;
    security: CalendarAclWatchSecurity;
}
export declare class CalendarAclWatchResponse extends SpeakeasyBase {
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
}
