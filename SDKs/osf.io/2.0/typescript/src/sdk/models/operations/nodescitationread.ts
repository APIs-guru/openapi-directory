import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesCitationReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=style_id" })
  styleId: string;
}


export class NodesCitationReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesCitationReadPathParams;
}


export class NodesCitationReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
