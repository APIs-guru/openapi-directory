import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesWikisListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesWikisListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesWikisListPathParams;
}


export class NodesWikisListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
