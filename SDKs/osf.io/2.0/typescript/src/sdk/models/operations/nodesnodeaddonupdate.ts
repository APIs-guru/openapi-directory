import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesNodeAddonUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}


export class NodesNodeAddonUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesNodeAddonUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class NodesNodeAddonUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
