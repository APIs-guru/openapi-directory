import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesReadPathParams;
}


export class NodesReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
