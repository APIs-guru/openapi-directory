import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesFilesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}


export class NodesFilesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesFilesReadPathParams;
}


export class NodesFilesReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
