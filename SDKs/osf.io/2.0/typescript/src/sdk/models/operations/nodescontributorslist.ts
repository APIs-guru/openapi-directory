import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesContributorsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesContributorsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesContributorsListPathParams;
}


export class NodesContributorsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
