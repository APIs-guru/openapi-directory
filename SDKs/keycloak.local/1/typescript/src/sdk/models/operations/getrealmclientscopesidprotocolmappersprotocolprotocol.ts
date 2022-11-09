import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientScopesIdProtocolMappersProtocolProtocolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=protocol" })
  protocol: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientScopesIdProtocolMappersProtocolProtocolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientScopesIdProtocolMappersProtocolProtocolPathParams;
}


export class GetRealmClientScopesIdProtocolMappersProtocolProtocolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ProtocolMapperRepresentation })
  protocolMapperRepresentations?: shared.ProtocolMapperRepresentation[];

  @Metadata()
  statusCode: number;
}
