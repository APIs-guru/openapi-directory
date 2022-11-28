import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmClientsIdRolesRoleNameCompositesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class PostRealmClientsIdRolesRoleNameCompositesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmClientsIdRolesRoleNameCompositesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.RoleRepresentation })
  request: shared.RoleRepresentation[];
}


export class PostRealmClientsIdRolesRoleNameCompositesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
