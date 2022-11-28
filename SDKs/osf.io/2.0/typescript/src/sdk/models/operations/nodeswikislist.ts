import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesWikisListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesWikisListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesWikisListPathParams;
}


export class NodesWikisListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
