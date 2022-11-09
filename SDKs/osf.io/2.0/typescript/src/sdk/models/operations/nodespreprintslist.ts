import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesPreprintsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesPreprintsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesPreprintsListPathParams;
}


export class NodesPreprintsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
