import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveAppsGetPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class DriveAppsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveAppsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveAppsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveAppsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveAppsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveAppsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveAppsGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveAppsGetSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveAppsGetSecurity extends SpeakeasyBase {
    option1?: DriveAppsGetSecurityOption1;
    option2?: DriveAppsGetSecurityOption2;
    option3?: DriveAppsGetSecurityOption3;
    option4?: DriveAppsGetSecurityOption4;
    option5?: DriveAppsGetSecurityOption5;
    option6?: DriveAppsGetSecurityOption6;
    option7?: DriveAppsGetSecurityOption7;
}
export declare class DriveAppsGetRequest extends SpeakeasyBase {
    pathParams: DriveAppsGetPathParams;
    queryParams: DriveAppsGetQueryParams;
    security: DriveAppsGetSecurity;
}
export declare class DriveAppsGetResponse extends SpeakeasyBase {
    app?: shared.App;
    contentType: string;
    statusCode: number;
}
