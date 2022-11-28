import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesViewOnlyLinksReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=link_id" })
  linkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesViewOnlyLinksReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesViewOnlyLinksReadPathParams;
}


export class NodesViewOnlyLinksReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
