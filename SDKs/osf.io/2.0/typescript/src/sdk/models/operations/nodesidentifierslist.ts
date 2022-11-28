import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesIdentifiersListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesIdentifiersListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesIdentifiersListPathParams;
}


export class NodesIdentifiersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
