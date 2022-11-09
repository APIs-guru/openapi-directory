import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsIdProtocolMappersProtocolProtocolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=protocol" })
  protocol: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdProtocolMappersProtocolProtocolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdProtocolMappersProtocolProtocolPathParams;
}


export class GetRealmClientsIdProtocolMappersProtocolProtocolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ProtocolMapperRepresentation })
  protocolMapperRepresentations?: shared.ProtocolMapperRepresentation[];

  @Metadata()
  statusCode: number;
}
