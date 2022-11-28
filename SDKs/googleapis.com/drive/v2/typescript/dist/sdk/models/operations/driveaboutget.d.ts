import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveAboutGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    includeSubscribed?: boolean;
    key?: string;
    maxChangeIdCount?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startChangeId?: string;
    userIp?: string;
}
export declare class DriveAboutGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveAboutGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveAboutGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveAboutGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveAboutGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveAboutGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveAboutGetSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveAboutGetSecurity extends SpeakeasyBase {
    option1?: DriveAboutGetSecurityOption1;
    option2?: DriveAboutGetSecurityOption2;
    option3?: DriveAboutGetSecurityOption3;
    option4?: DriveAboutGetSecurityOption4;
    option5?: DriveAboutGetSecurityOption5;
    option6?: DriveAboutGetSecurityOption6;
    option7?: DriveAboutGetSecurityOption7;
}
export declare class DriveAboutGetRequest extends SpeakeasyBase {
    queryParams: DriveAboutGetQueryParams;
    security: DriveAboutGetSecurity;
}
export declare class DriveAboutGetResponse extends SpeakeasyBase {
    about?: shared.About;
    contentType: string;
    statusCode: number;
}
