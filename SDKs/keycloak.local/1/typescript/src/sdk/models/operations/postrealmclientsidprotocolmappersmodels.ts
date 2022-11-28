import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmClientsIdProtocolMappersModelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsIdProtocolMappersModelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmClientsIdProtocolMappersModelsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProtocolMapperRepresentation;
}


export class PostRealmClientsIdProtocolMappersModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
