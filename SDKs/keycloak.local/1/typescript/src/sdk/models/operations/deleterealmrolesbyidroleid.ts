import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmRolesByIdRoleIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=role-id" })
  roleId: string;
}


export class DeleteRealmRolesByIdRoleIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmRolesByIdRoleIdPathParams;
}


export class DeleteRealmRolesByIdRoleIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
