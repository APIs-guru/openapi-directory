import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmRolesRoleNameManagementPermissionsPathParams extends SpeakeasyBase {
    realm: string;
    roleName: string;
}
export declare class GetRealmRolesRoleNameManagementPermissionsRequest extends SpeakeasyBase {
    pathParams: GetRealmRolesRoleNameManagementPermissionsPathParams;
}
export declare class GetRealmRolesRoleNameManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
}
