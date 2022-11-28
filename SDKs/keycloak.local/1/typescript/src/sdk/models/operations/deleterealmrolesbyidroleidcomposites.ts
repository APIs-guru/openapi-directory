import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteRealmRolesByIdRoleIdCompositesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-id" })
  roleId: string;
}


export class DeleteRealmRolesByIdRoleIdCompositesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRealmRolesByIdRoleIdCompositesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.RoleRepresentation })
  request: shared.RoleRepresentation[];
}


export class DeleteRealmRolesByIdRoleIdCompositesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
