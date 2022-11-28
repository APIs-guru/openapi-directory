import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmUsersIdRoleMappingsRealmPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUsersIdRoleMappingsRealmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmUsersIdRoleMappingsRealmPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.RoleRepresentation })
  request: shared.RoleRepresentation[];
}


export class PostRealmUsersIdRoleMappingsRealmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
