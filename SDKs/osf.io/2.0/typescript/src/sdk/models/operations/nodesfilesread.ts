import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesFilesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}


export class NodesFilesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesFilesReadPathParams;
}


export class NodesFilesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
