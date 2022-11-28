import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesNodeAddonUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}


export class NodesNodeAddonUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesNodeAddonUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class NodesNodeAddonUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
