import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesProvidersListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesProvidersListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesProvidersListPathParams;
}


export class NodesProvidersListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
