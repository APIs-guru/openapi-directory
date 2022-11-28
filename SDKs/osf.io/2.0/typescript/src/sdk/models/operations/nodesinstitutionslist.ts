import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesInstitutionsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


export class NodesInstitutionsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesInstitutionsListPathParams;
}


export class NodesInstitutionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
