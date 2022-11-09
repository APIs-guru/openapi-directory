import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesDraftRegistrationsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=draft_id" })
  draftId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesDraftRegistrationsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesDraftRegistrationsReadPathParams;
}


export class NodesDraftRegistrationsReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
