import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesAddonReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}


export class NodesAddonReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesAddonReadPathParams;
}


export class NodesAddonReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
