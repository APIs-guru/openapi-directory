import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRealmClientsId1ProtocolMappersModelsId2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id1" })
  id1: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id2" })
  id2: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmClientsId1ProtocolMappersModelsId2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmClientsId1ProtocolMappersModelsId2PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProtocolMapperRepresentation;
}


export class PutRealmClientsId1ProtocolMappersModelsId2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
