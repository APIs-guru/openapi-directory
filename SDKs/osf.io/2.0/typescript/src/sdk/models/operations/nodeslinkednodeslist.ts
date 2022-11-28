import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesLinkedNodesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesLinkedNodesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesLinkedNodesListPathParams;
}


export class NodesLinkedNodesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
