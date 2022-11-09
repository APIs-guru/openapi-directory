import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesViewOnlyLinksReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=link_id" })
  linkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesViewOnlyLinksReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesViewOnlyLinksReadPathParams;
}


export class NodesViewOnlyLinksReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
