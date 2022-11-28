import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRealmRolesByIdRoleIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-id" })
  roleId: string;
}


export class PutRealmRolesByIdRoleIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmRolesByIdRoleIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RoleRepresentation;
}


export class PutRealmRolesByIdRoleIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
