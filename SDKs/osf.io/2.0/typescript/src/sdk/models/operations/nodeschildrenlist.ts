import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesChildrenListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesChildrenListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesChildrenListPathParams;
}


export class NodesChildrenListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
