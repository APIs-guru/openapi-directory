import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmRolesRoleNameCompositesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class GetRealmRolesRoleNameCompositesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmRolesRoleNameCompositesPathParams;
}


export class GetRealmRolesRoleNameCompositesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RoleRepresentation })
  roleRepresentations?: shared.RoleRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
