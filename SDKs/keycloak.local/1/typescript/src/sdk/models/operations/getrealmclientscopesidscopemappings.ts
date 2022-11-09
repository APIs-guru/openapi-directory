import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientScopesIdScopeMappingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientScopesIdScopeMappingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientScopesIdScopeMappingsPathParams;
}


export class GetRealmClientScopesIdScopeMappingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  mappingsRepresentation?: shared.MappingsRepresentation;

  @Metadata()
  statusCode: number;
}
