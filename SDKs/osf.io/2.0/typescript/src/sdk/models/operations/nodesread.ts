import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesReadPathParams;
}


export class NodesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
