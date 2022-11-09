import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmRolesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmRolesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmRolesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RoleRepresentation;
}


export class PostRealmRolesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
