import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesIdentifiersListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesIdentifiersListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesIdentifiersListPathParams;
}


export class NodesIdentifiersListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
