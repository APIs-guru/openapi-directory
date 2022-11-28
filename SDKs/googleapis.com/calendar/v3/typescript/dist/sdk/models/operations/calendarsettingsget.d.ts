import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarSettingsGetPathParams extends SpeakeasyBase {
    setting: string;
}
export declare class CalendarSettingsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class CalendarSettingsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarSettingsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarSettingsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarSettingsGetSecurity extends SpeakeasyBase {
    option1?: CalendarSettingsGetSecurityOption1;
    option2?: CalendarSettingsGetSecurityOption2;
    option3?: CalendarSettingsGetSecurityOption3;
}
export declare class CalendarSettingsGetRequest extends SpeakeasyBase {
    pathParams: CalendarSettingsGetPathParams;
    queryParams: CalendarSettingsGetQueryParams;
    security: CalendarSettingsGetSecurity;
}
export declare class CalendarSettingsGetResponse extends SpeakeasyBase {
    contentType: string;
    setting?: shared.Setting;
    statusCode: number;
}
