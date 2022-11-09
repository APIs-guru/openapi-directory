import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmClientsIdRolesRoleNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class PutRealmClientsIdRolesRoleNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmClientsIdRolesRoleNamePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RoleRepresentation;
}


export class PutRealmClientsIdRolesRoleNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
