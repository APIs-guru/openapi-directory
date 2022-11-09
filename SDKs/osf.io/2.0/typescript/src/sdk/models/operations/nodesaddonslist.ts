import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesAddonsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesAddonsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesAddonsListPathParams;
}


export class NodesAddonsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
