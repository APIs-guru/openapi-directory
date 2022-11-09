import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesDraftRegistrationsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=draft_id" })
  draftId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesDraftRegistrationsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesDraftRegistrationsDeletePathParams;
}


export class NodesDraftRegistrationsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
