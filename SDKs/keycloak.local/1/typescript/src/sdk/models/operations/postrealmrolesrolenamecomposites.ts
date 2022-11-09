import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmRolesRoleNameCompositesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=role-name" })
  roleName: string;
}


export class PostRealmRolesRoleNameCompositesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmRolesRoleNameCompositesPathParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.RoleRepresentation })
  request: shared.RoleRepresentation[];
}


export class PostRealmRolesRoleNameCompositesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
