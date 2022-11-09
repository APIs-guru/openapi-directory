import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmRolesByIdRoleIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=role-id" })
  roleId: string;
}


export class PutRealmRolesByIdRoleIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmRolesByIdRoleIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RoleRepresentation;
}


export class PutRealmRolesByIdRoleIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
