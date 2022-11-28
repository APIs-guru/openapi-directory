import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmRolesByIdRoleIdCompositesClientsClientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client" })
  client: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role-id" })
  roleId: string;
}


export class GetRealmRolesByIdRoleIdCompositesClientsClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmRolesByIdRoleIdCompositesClientsClientPathParams;
}


export class GetRealmRolesByIdRoleIdCompositesClientsClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RoleRepresentation })
  roleRepresentations?: shared.RoleRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
