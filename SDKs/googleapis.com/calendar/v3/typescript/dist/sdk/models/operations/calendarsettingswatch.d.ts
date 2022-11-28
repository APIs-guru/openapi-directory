import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarSettingsWatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    syncToken?: string;
    userIp?: string;
}
export declare class CalendarSettingsWatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarSettingsWatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarSettingsWatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarSettingsWatchSecurity extends SpeakeasyBase {
    option1?: CalendarSettingsWatchSecurityOption1;
    option2?: CalendarSettingsWatchSecurityOption2;
    option3?: CalendarSettingsWatchSecurityOption3;
}
export declare class CalendarSettingsWatchRequest extends SpeakeasyBase {
    queryParams: CalendarSettingsWatchQueryParams;
    request?: shared.Channel;
    security: CalendarSettingsWatchSecurity;
}
export declare class CalendarSettingsWatchResponse extends SpeakeasyBase {
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
}
