import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesPreprintsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesPreprintsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesPreprintsListPathParams;
}


export class NodesPreprintsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
