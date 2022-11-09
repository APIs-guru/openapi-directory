import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmRolesByIdRoleIdCompositesClientsClientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client" })
  client: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=role-id" })
  roleId: string;
}


export class GetRealmRolesByIdRoleIdCompositesClientsClientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmRolesByIdRoleIdCompositesClientsClientPathParams;
}


export class GetRealmRolesByIdRoleIdCompositesClientsClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RoleRepresentation })
  roleRepresentations?: shared.RoleRepresentation[];

  @Metadata()
  statusCode: number;
}
