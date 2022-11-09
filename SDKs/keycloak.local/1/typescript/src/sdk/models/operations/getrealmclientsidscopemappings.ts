import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsIdScopeMappingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdScopeMappingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdScopeMappingsPathParams;
}


export class GetRealmClientsIdScopeMappingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  mappingsRepresentation?: shared.MappingsRepresentation;

  @Metadata()
  statusCode: number;
}
