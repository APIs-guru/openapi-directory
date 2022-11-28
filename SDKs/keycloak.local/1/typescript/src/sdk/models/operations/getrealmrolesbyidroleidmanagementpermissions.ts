import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmRolesByIdRoleIdManagementPermissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-id" })
  roleId: string;
}


export class GetRealmRolesByIdRoleIdManagementPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmRolesByIdRoleIdManagementPermissionsPathParams;
}


export class GetRealmRolesByIdRoleIdManagementPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  managementPermissionReference?: shared.ManagementPermissionReference;

  @SpeakeasyMetadata()
  statusCode: number;
}
