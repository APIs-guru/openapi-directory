import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesCitationListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesCitationListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesCitationListPathParams;
}


export class NodesCitationListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
