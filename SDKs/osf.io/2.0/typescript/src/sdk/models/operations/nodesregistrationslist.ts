import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesRegistrationsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesRegistrationsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesRegistrationsListPathParams;
}


export class NodesRegistrationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
