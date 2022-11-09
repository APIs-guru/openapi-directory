import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmClientsIdNodesNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=node" })
  node: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmClientsIdNodesNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmClientsIdNodesNodePathParams;
}


export class DeleteRealmClientsIdNodesNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
