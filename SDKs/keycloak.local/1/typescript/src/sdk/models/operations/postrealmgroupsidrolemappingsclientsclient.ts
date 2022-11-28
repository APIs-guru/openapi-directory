import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmGroupsIdRoleMappingsClientsClientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client" })
  client: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmGroupsIdRoleMappingsClientsClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmGroupsIdRoleMappingsClientsClientPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.RoleRepresentation })
  request: shared.RoleRepresentation[];
}


export class PostRealmGroupsIdRoleMappingsClientsClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
