import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivePermissionsDeletePathParams extends SpeakeasyBase {
    fileId: string;
    permissionId: string;
}
export declare class DrivePermissionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DrivePermissionsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsDeleteSecurity extends SpeakeasyBase {
    option1?: DrivePermissionsDeleteSecurityOption1;
    option2?: DrivePermissionsDeleteSecurityOption2;
}
export declare class DrivePermissionsDeleteRequest extends SpeakeasyBase {
    pathParams: DrivePermissionsDeletePathParams;
    queryParams: DrivePermissionsDeleteQueryParams;
    security: DrivePermissionsDeleteSecurity;
}
export declare class DrivePermissionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
