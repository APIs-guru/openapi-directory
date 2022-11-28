import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarAclInsertPathParams extends SpeakeasyBase {
    calendarId: string;
}
export declare class CalendarAclInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sendNotifications?: boolean;
    userIp?: string;
}
export declare class CalendarAclInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarAclInsertRequest extends SpeakeasyBase {
    pathParams: CalendarAclInsertPathParams;
    queryParams: CalendarAclInsertQueryParams;
    request?: shared.AclRule;
    security: CalendarAclInsertSecurity;
}
export declare class CalendarAclInsertResponse extends SpeakeasyBase {
    aclRule?: shared.AclRule;
    contentType: string;
    statusCode: number;
}
