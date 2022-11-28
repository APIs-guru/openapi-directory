import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarAclPatchPathParams extends SpeakeasyBase {
    calendarId: string;
    ruleId: string;
}
export declare class CalendarAclPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sendNotifications?: boolean;
    userIp?: string;
}
export declare class CalendarAclPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarAclPatchRequest extends SpeakeasyBase {
    pathParams: CalendarAclPatchPathParams;
    queryParams: CalendarAclPatchQueryParams;
    request?: shared.AclRule;
    security: CalendarAclPatchSecurity;
}
export declare class CalendarAclPatchResponse extends SpeakeasyBase {
    aclRule?: shared.AclRule;
    contentType: string;
    statusCode: number;
}
