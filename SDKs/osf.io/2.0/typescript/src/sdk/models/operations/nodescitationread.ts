import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesCitationReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=style_id" })
  styleId: string;
}


export class NodesCitationReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesCitationReadPathParams;
}


export class NodesCitationReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
