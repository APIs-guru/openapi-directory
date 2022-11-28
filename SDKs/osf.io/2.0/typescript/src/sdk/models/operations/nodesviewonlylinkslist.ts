import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesViewOnlyLinksListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesViewOnlyLinksListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesViewOnlyLinksListPathParams;
}


export class NodesViewOnlyLinksListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
