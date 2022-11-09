import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesCommentsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesCommentsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesCommentsListPathParams;
}


export class NodesCommentsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
