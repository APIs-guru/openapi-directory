import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarAclUpdatePathParams extends SpeakeasyBase {
    calendarId: string;
    ruleId: string;
}
export declare class CalendarAclUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sendNotifications?: boolean;
    userIp?: string;
}
export declare class CalendarAclUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarAclUpdateRequest extends SpeakeasyBase {
    pathParams: CalendarAclUpdatePathParams;
    queryParams: CalendarAclUpdateQueryParams;
    request?: shared.AclRule;
    security: CalendarAclUpdateSecurity;
}
export declare class CalendarAclUpdateResponse extends SpeakeasyBase {
    aclRule?: shared.AclRule;
    contentType: string;
    statusCode: number;
}
