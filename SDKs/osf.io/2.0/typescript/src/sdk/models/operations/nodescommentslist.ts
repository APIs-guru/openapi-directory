import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesCommentsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesCommentsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesCommentsListPathParams;
}


export class NodesCommentsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
