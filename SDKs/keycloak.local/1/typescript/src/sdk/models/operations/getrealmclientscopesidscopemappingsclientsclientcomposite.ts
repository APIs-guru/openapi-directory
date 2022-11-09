import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientScopesIdScopeMappingsClientsClientCompositePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client" })
  client: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientScopesIdScopeMappingsClientsClientCompositeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientScopesIdScopeMappingsClientsClientCompositePathParams;
}


export class GetRealmClientScopesIdScopeMappingsClientsClientCompositeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RoleRepresentation })
  roleRepresentations?: shared.RoleRepresentation[];

  @Metadata()
  statusCode: number;
}
