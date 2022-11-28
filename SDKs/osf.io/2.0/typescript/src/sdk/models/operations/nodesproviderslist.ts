import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesProvidersListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesProvidersListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesProvidersListPathParams;
}


export class NodesProvidersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
