import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivePermissionsGetPathParams extends SpeakeasyBase {
    fileId: string;
    permissionId: string;
}
export declare class DrivePermissionsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    supportsAllDrives?: boolean;
    supportsTeamDrives?: boolean;
    useDomainAdminAccess?: boolean;
    userIp?: string;
}
export declare class DrivePermissionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsGetSecurity extends SpeakeasyBase {
    option1?: DrivePermissionsGetSecurityOption1;
    option2?: DrivePermissionsGetSecurityOption2;
    option3?: DrivePermissionsGetSecurityOption3;
    option4?: DrivePermissionsGetSecurityOption4;
    option5?: DrivePermissionsGetSecurityOption5;
    option6?: DrivePermissionsGetSecurityOption6;
}
export declare class DrivePermissionsGetRequest extends SpeakeasyBase {
    pathParams: DrivePermissionsGetPathParams;
    queryParams: DrivePermissionsGetQueryParams;
    security: DrivePermissionsGetSecurity;
}
export declare class DrivePermissionsGetResponse extends SpeakeasyBase {
    contentType: string;
    permission?: shared.Permission;
    statusCode: number;
}
