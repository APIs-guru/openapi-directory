import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsIdRolesRoleNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class GetRealmClientsIdRolesRoleNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdRolesRoleNamePathParams;
}


export class GetRealmClientsIdRolesRoleNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  roleRepresentation?: shared.RoleRepresentation;

  @Metadata()
  statusCode: number;
}
