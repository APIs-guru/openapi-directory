import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmRolesRoleNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class GetRealmRolesRoleNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmRolesRoleNamePathParams;
}


export class GetRealmRolesRoleNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  roleRepresentation?: shared.RoleRepresentation;

  @Metadata()
  statusCode: number;
}
