import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarAclGetPathParams extends SpeakeasyBase {
    calendarId: string;
    ruleId: string;
}
export declare class CalendarAclGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class CalendarAclGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarAclGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarAclGetSecurity extends SpeakeasyBase {
    option1?: CalendarAclGetSecurityOption1;
    option2?: CalendarAclGetSecurityOption2;
}
export declare class CalendarAclGetRequest extends SpeakeasyBase {
    pathParams: CalendarAclGetPathParams;
    queryParams: CalendarAclGetQueryParams;
    security: CalendarAclGetSecurity;
}
export declare class CalendarAclGetResponse extends SpeakeasyBase {
    aclRule?: shared.AclRule;
    contentType: string;
    statusCode: number;
}
