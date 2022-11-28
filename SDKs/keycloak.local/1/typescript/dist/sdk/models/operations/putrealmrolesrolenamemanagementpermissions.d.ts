import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmRolesRoleNameManagementPermissionsPathParams extends SpeakeasyBase {
    realm: string;
    roleName: string;
}
export declare class PutRealmRolesRoleNameManagementPermissionsRequest extends SpeakeasyBase {
    pathParams: PutRealmRolesRoleNameManagementPermissionsPathParams;
    request: shared.ManagementPermissionReference;
}
export declare class PutRealmRolesRoleNameManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
}
