import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivePermissionsUpdatePathParams extends SpeakeasyBase {
    fileId: string;
    permissionId: string;
}
export declare class DrivePermissionsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    removeExpiration?: boolean;
    supportsAllDrives?: boolean;
    supportsTeamDrives?: boolean;
    transferOwnership?: boolean;
    useDomainAdminAccess?: boolean;
    userIp?: string;
}
export declare class DrivePermissionsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsUpdateSecurity extends SpeakeasyBase {
    option1?: DrivePermissionsUpdateSecurityOption1;
    option2?: DrivePermissionsUpdateSecurityOption2;
}
export declare class DrivePermissionsUpdateRequest extends SpeakeasyBase {
    pathParams: DrivePermissionsUpdatePathParams;
    queryParams: DrivePermissionsUpdateQueryParams;
    request?: shared.PermissionInput;
    security: DrivePermissionsUpdateSecurity;
}
export declare class DrivePermissionsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    permission?: shared.Permission;
    statusCode: number;
}
