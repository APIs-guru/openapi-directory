import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarAclDeletePathParams extends SpeakeasyBase {
    calendarId: string;
    ruleId: string;
}
export declare class CalendarAclDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class CalendarAclDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarAclDeleteRequest extends SpeakeasyBase {
    pathParams: CalendarAclDeletePathParams;
    queryParams: CalendarAclDeleteQueryParams;
    security: CalendarAclDeleteSecurity;
}
export declare class CalendarAclDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
