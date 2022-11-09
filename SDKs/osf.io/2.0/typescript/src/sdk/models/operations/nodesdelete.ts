import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesDeletePathParams;
}


export class NodesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
