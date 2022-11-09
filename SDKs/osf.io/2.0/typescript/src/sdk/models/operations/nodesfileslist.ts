import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesFilesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}


export class NodesFilesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesFilesListPathParams;
}


export class NodesFilesListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
