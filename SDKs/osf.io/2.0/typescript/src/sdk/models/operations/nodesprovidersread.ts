import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesProvidersReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}


export class NodesProvidersReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesProvidersReadPathParams;
}


export class NodesProvidersReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
