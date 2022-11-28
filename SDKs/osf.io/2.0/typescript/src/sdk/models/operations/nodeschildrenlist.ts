import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesChildrenListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesChildrenListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesChildrenListPathParams;
}


export class NodesChildrenListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
