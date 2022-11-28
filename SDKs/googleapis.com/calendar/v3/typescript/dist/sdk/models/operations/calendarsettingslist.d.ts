import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarSettingsListQueryParams extends SpeakeasyBase {
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
export declare class CalendarSettingsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarSettingsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarSettingsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarSettingsListSecurity extends SpeakeasyBase {
    option1?: CalendarSettingsListSecurityOption1;
    option2?: CalendarSettingsListSecurityOption2;
    option3?: CalendarSettingsListSecurityOption3;
}
export declare class CalendarSettingsListRequest extends SpeakeasyBase {
    queryParams: CalendarSettingsListQueryParams;
    security: CalendarSettingsListSecurity;
}
export declare class CalendarSettingsListResponse extends SpeakeasyBase {
    contentType: string;
    settings?: shared.Settings;
    statusCode: number;
}
