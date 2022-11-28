import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarChannelsStopQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class CalendarChannelsStopSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarChannelsStopSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarChannelsStopSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarChannelsStopSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarChannelsStopSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarChannelsStopSecurity extends SpeakeasyBase {
    option1?: CalendarChannelsStopSecurityOption1;
    option2?: CalendarChannelsStopSecurityOption2;
    option3?: CalendarChannelsStopSecurityOption3;
    option4?: CalendarChannelsStopSecurityOption4;
    option5?: CalendarChannelsStopSecurityOption5;
}
export declare class CalendarChannelsStopRequest extends SpeakeasyBase {
    queryParams: CalendarChannelsStopQueryParams;
    request?: shared.Channel;
    security: CalendarChannelsStopSecurity;
}
export declare class CalendarChannelsStopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
