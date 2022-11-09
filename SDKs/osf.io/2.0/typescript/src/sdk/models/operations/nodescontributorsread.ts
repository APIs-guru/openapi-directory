import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesContributorsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class NodesContributorsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesContributorsReadPathParams;
}


export class NodesContributorsReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
