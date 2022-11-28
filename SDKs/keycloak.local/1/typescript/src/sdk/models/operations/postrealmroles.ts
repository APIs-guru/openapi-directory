import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmRolesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmRolesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmRolesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RoleRepresentation;
}


export class PostRealmRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
