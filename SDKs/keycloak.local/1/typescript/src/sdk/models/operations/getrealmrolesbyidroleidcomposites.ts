import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmRolesByIdRoleIdCompositesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-id" })
  roleId: string;
}


export class GetRealmRolesByIdRoleIdCompositesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmRolesByIdRoleIdCompositesPathParams;
}


export class GetRealmRolesByIdRoleIdCompositesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RoleRepresentation })
  roleRepresentations?: shared.RoleRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
