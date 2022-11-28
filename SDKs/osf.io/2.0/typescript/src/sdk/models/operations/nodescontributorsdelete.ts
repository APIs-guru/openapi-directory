import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesContributorsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class NodesContributorsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesContributorsDeletePathParams;
}


export class NodesContributorsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
