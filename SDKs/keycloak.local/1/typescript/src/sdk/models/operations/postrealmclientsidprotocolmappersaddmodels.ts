import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmClientsIdProtocolMappersAddModelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsIdProtocolMappersAddModelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmClientsIdProtocolMappersAddModelsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.ProtocolMapperRepresentation })
  request: shared.ProtocolMapperRepresentation[];
}


export class PostRealmClientsIdProtocolMappersAddModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
