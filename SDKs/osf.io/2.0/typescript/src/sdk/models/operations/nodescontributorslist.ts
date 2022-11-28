import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesContributorsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesContributorsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesContributorsListPathParams;
}


export class NodesContributorsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
