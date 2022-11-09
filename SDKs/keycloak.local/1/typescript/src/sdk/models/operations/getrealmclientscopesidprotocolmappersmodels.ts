import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientScopesIdProtocolMappersModelsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientScopesIdProtocolMappersModelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientScopesIdProtocolMappersModelsPathParams;
}


export class GetRealmClientScopesIdProtocolMappersModelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ProtocolMapperRepresentation })
  protocolMapperRepresentations?: shared.ProtocolMapperRepresentation[];

  @Metadata()
  statusCode: number;
}
