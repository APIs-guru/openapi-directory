import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesAddonReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}


export class NodesAddonReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesAddonReadPathParams;
}


export class NodesAddonReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
