import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesForksListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesForksListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesForksListPathParams;
}


export class NodesForksListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
