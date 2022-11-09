import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmRolesByIdRoleIdManagementPermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=role-id" })
  roleId: string;
}


export class GetRealmRolesByIdRoleIdManagementPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmRolesByIdRoleIdManagementPermissionsPathParams;
}


export class GetRealmRolesByIdRoleIdManagementPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managementPermissionReference?: shared.ManagementPermissionReference;

  @Metadata()
  statusCode: number;
}
