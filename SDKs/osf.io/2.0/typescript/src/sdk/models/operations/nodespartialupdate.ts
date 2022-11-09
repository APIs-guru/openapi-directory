import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class NodesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
