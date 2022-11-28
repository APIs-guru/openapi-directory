import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivePermissionsCreatePathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DrivePermissionsCreateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    emailMessage?: string;
    enforceSingleParent?: boolean;
    fields?: string;
    key?: string;
    moveToNewOwnersRoot?: boolean;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sendNotificationEmail?: boolean;
    supportsAllDrives?: boolean;
    supportsTeamDrives?: boolean;
    transferOwnership?: boolean;
    useDomainAdminAccess?: boolean;
    userIp?: string;
}
export declare class DrivePermissionsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsCreateSecurity extends SpeakeasyBase {
    option1?: DrivePermissionsCreateSecurityOption1;
    option2?: DrivePermissionsCreateSecurityOption2;
}
export declare class DrivePermissionsCreateRequest extends SpeakeasyBase {
    pathParams: DrivePermissionsCreatePathParams;
    queryParams: DrivePermissionsCreateQueryParams;
    request?: shared.PermissionInput;
    security: DrivePermissionsCreateSecurity;
}
export declare class DrivePermissionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    permission?: shared.Permission;
    statusCode: number;
}
