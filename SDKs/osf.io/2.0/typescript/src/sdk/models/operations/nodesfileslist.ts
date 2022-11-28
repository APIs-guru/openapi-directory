import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesFilesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}


export class NodesFilesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesFilesListPathParams;
}


export class NodesFilesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
