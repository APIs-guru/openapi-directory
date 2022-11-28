import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmClientsIdNodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsIdNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmClientsIdNodesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostRealmClientsIdNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
