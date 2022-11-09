import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesInstitutionsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesInstitutionsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesInstitutionsListPathParams;
}


export class NodesInstitutionsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
