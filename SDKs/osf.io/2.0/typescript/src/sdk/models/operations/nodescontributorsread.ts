import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesContributorsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class NodesContributorsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesContributorsReadPathParams;
}


export class NodesContributorsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
