import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesDraftRegistrationsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=draft_id" })
  draftId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesDraftRegistrationsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesDraftRegistrationsDeletePathParams;
}


export class NodesDraftRegistrationsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
