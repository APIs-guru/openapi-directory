import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmClientsIdRolesRoleNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class DeleteRealmClientsIdRolesRoleNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmClientsIdRolesRoleNamePathParams;
}


export class DeleteRealmClientsIdRolesRoleNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
