import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesContributorsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class NodesContributorsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesContributorsDeletePathParams;
}


export class NodesContributorsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
