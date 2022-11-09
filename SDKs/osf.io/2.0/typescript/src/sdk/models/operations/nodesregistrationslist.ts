import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesRegistrationsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesRegistrationsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesRegistrationsListPathParams;
}


export class NodesRegistrationsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
