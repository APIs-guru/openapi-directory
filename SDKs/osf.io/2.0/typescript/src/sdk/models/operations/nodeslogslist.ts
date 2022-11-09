import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesLogsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesLogsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesLogsListPathParams;
}


export class NodesLogsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
