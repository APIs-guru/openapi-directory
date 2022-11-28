import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesDeletePathParams;
}


export class NodesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
