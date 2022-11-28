import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteRealmClientsIdScopeMappingsClientsClientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client" })
  client: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmClientsIdScopeMappingsClientsClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRealmClientsIdScopeMappingsClientsClientPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.RoleRepresentation })
  request: shared.RoleRepresentation[];
}


export class DeleteRealmClientsIdScopeMappingsClientsClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
