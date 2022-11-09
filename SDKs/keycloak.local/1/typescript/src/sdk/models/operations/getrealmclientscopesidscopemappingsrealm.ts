import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientScopesIdScopeMappingsRealmPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientScopesIdScopeMappingsRealmRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientScopesIdScopeMappingsRealmPathParams;
}


export class GetRealmClientScopesIdScopeMappingsRealmResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RoleRepresentation })
  roleRepresentations?: shared.RoleRepresentation[];

  @Metadata()
  statusCode: number;
}
