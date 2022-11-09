import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmRolesRoleNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class DeleteRealmRolesRoleNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmRolesRoleNamePathParams;
}


export class DeleteRealmRolesRoleNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
