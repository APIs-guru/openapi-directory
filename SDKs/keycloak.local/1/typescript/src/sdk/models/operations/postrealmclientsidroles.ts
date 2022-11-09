import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmClientsIdRolesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsIdRolesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmClientsIdRolesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RoleRepresentation;
}


export class PostRealmClientsIdRolesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
