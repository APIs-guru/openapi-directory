import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivePermissionsInsertPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DrivePermissionsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    emailMessage?: string;
    enforceSingleParent?: boolean;
    fields?: string;
    key?: string;
    moveToNewOwnersRoot?: boolean;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sendNotificationEmails?: boolean;
    supportsAllDrives?: boolean;
    supportsTeamDrives?: boolean;
    useDomainAdminAccess?: boolean;
    userIp?: string;
}
export declare class DrivePermissionsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsInsertSecurity extends SpeakeasyBase {
    option1?: DrivePermissionsInsertSecurityOption1;
    option2?: DrivePermissionsInsertSecurityOption2;
}
export declare class DrivePermissionsInsertRequest extends SpeakeasyBase {
    pathParams: DrivePermissionsInsertPathParams;
    queryParams: DrivePermissionsInsertQueryParams;
    request?: shared.PermissionInput;
    security: DrivePermissionsInsertSecurity;
}
export declare class DrivePermissionsInsertResponse extends SpeakeasyBase {
    contentType: string;
    permission?: shared.Permission;
    statusCode: number;
}
