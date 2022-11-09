import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesProvidersReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}


export class NodesProvidersReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesProvidersReadPathParams;
}


export class NodesProvidersReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
