import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsId1ProtocolMappersModelsId2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id1" })
  id1: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id2" })
  id2: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsId1ProtocolMappersModelsId2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsId1ProtocolMappersModelsId2PathParams;
}


export class GetRealmClientsId1ProtocolMappersModelsId2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  protocolMapperRepresentation?: shared.ProtocolMapperRepresentation;

  @Metadata()
  statusCode: number;
}
