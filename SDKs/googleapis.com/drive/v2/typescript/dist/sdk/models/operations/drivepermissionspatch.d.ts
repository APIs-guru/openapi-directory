import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivePermissionsPatchPathParams extends SpeakeasyBase {
    fileId: string;
    permissionId: string;
}
export declare class DrivePermissionsPatchQueryParams extends SpeakeasyBase {
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
export declare class DrivePermissionsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsPatchSecurity extends SpeakeasyBase {
    option1?: DrivePermissionsPatchSecurityOption1;
    option2?: DrivePermissionsPatchSecurityOption2;
}
export declare class DrivePermissionsPatchRequest extends SpeakeasyBase {
    pathParams: DrivePermissionsPatchPathParams;
    queryParams: DrivePermissionsPatchQueryParams;
    request?: shared.PermissionInput;
    security: DrivePermissionsPatchSecurity;
}
export declare class DrivePermissionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    permission?: shared.Permission;
    statusCode: number;
}
