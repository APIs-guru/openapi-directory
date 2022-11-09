import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientScopesIdScopeMappingsRealmAvailablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientScopesIdScopeMappingsRealmAvailableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientScopesIdScopeMappingsRealmAvailablePathParams;
}


export class GetRealmClientScopesIdScopeMappingsRealmAvailableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RoleRepresentation })
  roleRepresentations?: shared.RoleRepresentation[];

  @Metadata()
  statusCode: number;
}
