import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesViewOnlyLinksListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesViewOnlyLinksListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesViewOnlyLinksListPathParams;
}


export class NodesViewOnlyLinksListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
