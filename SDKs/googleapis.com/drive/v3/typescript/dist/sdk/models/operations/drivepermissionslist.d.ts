import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivePermissionsListPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DrivePermissionsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    includePermissionsForView?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    supportsAllDrives?: boolean;
    supportsTeamDrives?: boolean;
    useDomainAdminAccess?: boolean;
    userIp?: string;
}
export declare class DrivePermissionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePermissionsListSecurity extends SpeakeasyBase {
    option1?: DrivePermissionsListSecurityOption1;
    option2?: DrivePermissionsListSecurityOption2;
    option3?: DrivePermissionsListSecurityOption3;
    option4?: DrivePermissionsListSecurityOption4;
    option5?: DrivePermissionsListSecurityOption5;
    option6?: DrivePermissionsListSecurityOption6;
}
export declare class DrivePermissionsListRequest extends SpeakeasyBase {
    pathParams: DrivePermissionsListPathParams;
    queryParams: DrivePermissionsListQueryParams;
    security: DrivePermissionsListSecurity;
}
export declare class DrivePermissionsListResponse extends SpeakeasyBase {
    contentType: string;
    permissionList?: shared.PermissionList;
    statusCode: number;
}
