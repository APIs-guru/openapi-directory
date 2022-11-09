import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsIdTestNodesAvailablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdTestNodesAvailableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdTestNodesAvailablePathParams;
}


export class GetRealmClientsIdTestNodesAvailableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  globalRequestResult?: shared.GlobalRequestResult;

  @Metadata()
  statusCode: number;
}
