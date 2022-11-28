import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesAddonsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesAddonsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesAddonsListPathParams;
}


export class NodesAddonsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
