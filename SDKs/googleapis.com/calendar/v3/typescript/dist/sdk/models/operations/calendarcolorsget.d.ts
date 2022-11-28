import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalendarColorsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class CalendarColorsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarColorsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CalendarColorsGetSecurity extends SpeakeasyBase {
    option1?: CalendarColorsGetSecurityOption1;
    option2?: CalendarColorsGetSecurityOption2;
}
export declare class CalendarColorsGetRequest extends SpeakeasyBase {
    queryParams: CalendarColorsGetQueryParams;
    security: CalendarColorsGetSecurity;
}
export declare class CalendarColorsGetResponse extends SpeakeasyBase {
    colors?: shared.Colors;
    contentType: string;
    statusCode: number;
}
