import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmRolesRoleNameManagementPermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class PutRealmRolesRoleNameManagementPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmRolesRoleNameManagementPermissionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ManagementPermissionReference;
}


export class PutRealmRolesRoleNameManagementPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managementPermissionReference?: shared.ManagementPermissionReference;

  @Metadata()
  statusCode: number;
}
