import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRealmRolesRoleNameManagementPermissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class PutRealmRolesRoleNameManagementPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmRolesRoleNameManagementPermissionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManagementPermissionReference;
}


export class PutRealmRolesRoleNameManagementPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  managementPermissionReference?: shared.ManagementPermissionReference;

  @SpeakeasyMetadata()
  statusCode: number;
}
