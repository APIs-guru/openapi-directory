import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesLogsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesLogsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesLogsListPathParams;
}


export class NodesLogsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
