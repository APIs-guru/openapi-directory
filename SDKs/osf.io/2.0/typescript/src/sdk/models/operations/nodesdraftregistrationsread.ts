import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesDraftRegistrationsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=draft_id" })
  draftId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesDraftRegistrationsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesDraftRegistrationsReadPathParams;
}


export class NodesDraftRegistrationsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
