import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarFreebusyQueryQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class CalendarFreebusyQuerySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarFreebusyQuerySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarFreebusyQuerySecurity extends SpeakeasyBase {
    option1?: CalendarFreebusyQuerySecurityOption1;
    option2?: CalendarFreebusyQuerySecurityOption2;
}
export declare class CalendarFreebusyQueryRequest extends SpeakeasyBase {
    queryParams: CalendarFreebusyQueryQueryParams;
    request?: shared.FreeBusyRequest;
    security: CalendarFreebusyQuerySecurity;
}
export declare class CalendarFreebusyQueryResponse extends SpeakeasyBase {
    contentType: string;
    freeBusyResponse?: shared.FreeBusyResponse;
    statusCode: number;
}
