import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmRolesByIdRoleIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=role-id" })
  roleId: string;
}


export class GetRealmRolesByIdRoleIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmRolesByIdRoleIdPathParams;
}


export class GetRealmRolesByIdRoleIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  roleRepresentation?: shared.RoleRepresentation;

  @Metadata()
  statusCode: number;
}
