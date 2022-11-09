import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesDraftRegistrationsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesDraftRegistrationsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesDraftRegistrationsListPathParams;
}


export class NodesDraftRegistrationsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
