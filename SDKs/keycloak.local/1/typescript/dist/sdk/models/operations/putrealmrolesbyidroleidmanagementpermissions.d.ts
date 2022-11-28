import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmRolesByIdRoleIdManagementPermissionsPathParams extends SpeakeasyBase {
    realm: string;
    roleId: string;
}
export declare class PutRealmRolesByIdRoleIdManagementPermissionsRequest extends SpeakeasyBase {
    pathParams: PutRealmRolesByIdRoleIdManagementPermissionsPathParams;
    request: shared.ManagementPermissionReference;
}
export declare class PutRealmRolesByIdRoleIdManagementPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    managementPermissionReference?: shared.ManagementPermissionReference;
    statusCode: number;
}
