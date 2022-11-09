import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmRolesByIdRoleIdCompositesRealmPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=role-id" })
  roleId: string;
}


export class GetRealmRolesByIdRoleIdCompositesRealmRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmRolesByIdRoleIdCompositesRealmPathParams;
}


export class GetRealmRolesByIdRoleIdCompositesRealmResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RoleRepresentation })
  roleRepresentations?: shared.RoleRepresentation[];

  @Metadata()
  statusCode: number;
}
