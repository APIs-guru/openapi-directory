import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesCitationListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesCitationListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesCitationListPathParams;
}


export class NodesCitationListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
