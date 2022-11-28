import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarAclListPathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare class CalendarAclListQueryParams extends SpeakeasyBase {
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
export declare class CalendarAclListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarAclListRequest extends SpeakeasyBase {
    pathParams: CalendarAclListPathParams;
    queryParams: CalendarAclListQueryParams;
    security: CalendarAclListSecurity;
}
export declare class CalendarAclListResponse extends SpeakeasyBase {
    acl?: shared.Acl;
    contentType: string;
    statusCode: number;
}
