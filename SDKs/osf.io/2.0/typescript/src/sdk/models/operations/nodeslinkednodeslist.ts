import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesLinkedNodesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesLinkedNodesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesLinkedNodesListPathParams;
}


export class NodesLinkedNodesListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
