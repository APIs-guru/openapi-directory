import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmRolesByIdRoleIdManagementPermissionsPathParams extends SpeakeasyBase {
    realm: string;
    roleId: string;
}
export declare class GetRealmRolesByIdRoleIdManagementPermissionsRequest extends SpeakeasyBase {
    pathParams: GetRealmRolesByIdRoleIdManagementPermissionsPathParams;
}
export declare class GetRealmRolesByIdRoleIdManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
}
