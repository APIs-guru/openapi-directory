import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmRolesByIdRoleIdManagementPermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=role-id" })
  roleId: string;
}


export class PutRealmRolesByIdRoleIdManagementPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmRolesByIdRoleIdManagementPermissionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ManagementPermissionReference;
}


export class PutRealmRolesByIdRoleIdManagementPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managementPermissionReference?: shared.ManagementPermissionReference;

  @Metadata()
  statusCode: number;
}
