import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRealmClientsId1ProtocolMappersModelsId2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id1" })
  id1: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id2" })
  id2: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmClientsId1ProtocolMappersModelsId2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRealmClientsId1ProtocolMappersModelsId2PathParams;
}


export class DeleteRealmClientsId1ProtocolMappersModelsId2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
