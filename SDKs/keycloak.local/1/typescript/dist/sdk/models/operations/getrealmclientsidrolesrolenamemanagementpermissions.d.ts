import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdRolesRoleNameManagementPermissionsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
    roleName: string;
}
export declare class GetRealmClientsIdRolesRoleNameManagementPermissionsRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdRolesRoleNameManagementPermissionsPathParams;
}
export declare class GetRealmClientsIdRolesRoleNameManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
}
