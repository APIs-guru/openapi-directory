import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesForksListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesForksListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesForksListPathParams;
}


export class NodesForksListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
