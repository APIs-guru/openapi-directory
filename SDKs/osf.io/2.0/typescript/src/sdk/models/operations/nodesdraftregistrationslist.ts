import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesDraftRegistrationsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesDraftRegistrationsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesDraftRegistrationsListPathParams;
}


export class NodesDraftRegistrationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
