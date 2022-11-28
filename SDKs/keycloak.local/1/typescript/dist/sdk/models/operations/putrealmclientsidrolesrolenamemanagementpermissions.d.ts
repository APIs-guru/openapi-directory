import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmClientsIdRolesRoleNameManagementPermissionsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
    roleName: string;
}
export declare class PutRealmClientsIdRolesRoleNameManagementPermissionsRequest extends SpeakeasyBase {
    pathParams: PutRealmClientsIdRolesRoleNameManagementPermissionsPathParams;
    request: shared.ManagementPermissionReference;
}
export declare class PutRealmClientsIdRolesRoleNameManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
}
