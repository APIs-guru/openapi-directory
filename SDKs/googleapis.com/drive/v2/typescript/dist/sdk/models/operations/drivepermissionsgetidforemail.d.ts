import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivePermissionsGetIdForEmailPathParams extends SpeakeasyBase {
    email: string;
}
export declare class DrivePermissionsGetIdForEmailQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DrivePermissionsGetIdForEmailSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsGetIdForEmailSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsGetIdForEmailSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsGetIdForEmailSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsGetIdForEmailSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsGetIdForEmailSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsGetIdForEmailSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsGetIdForEmailSecurityOption8 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsGetIdForEmailSecurity extends SpeakeasyBase {
    option1?: DrivePermissionsGetIdForEmailSecurityOption1;
    option2?: DrivePermissionsGetIdForEmailSecurityOption2;
    option3?: DrivePermissionsGetIdForEmailSecurityOption3;
    option4?: DrivePermissionsGetIdForEmailSecurityOption4;
    option5?: DrivePermissionsGetIdForEmailSecurityOption5;
    option6?: DrivePermissionsGetIdForEmailSecurityOption6;
    option7?: DrivePermissionsGetIdForEmailSecurityOption7;
    option8?: DrivePermissionsGetIdForEmailSecurityOption8;
}
export declare class DrivePermissionsGetIdForEmailRequest extends SpeakeasyBase {
    pathParams: DrivePermissionsGetIdForEmailPathParams;
    queryParams: DrivePermissionsGetIdForEmailQueryParams;
    security: DrivePermissionsGetIdForEmailSecurity;
}
export declare class DrivePermissionsGetIdForEmailResponse extends SpeakeasyBase {
    contentType: string;
    permissionId?: shared.PermissionId;
    statusCode: number;
}
