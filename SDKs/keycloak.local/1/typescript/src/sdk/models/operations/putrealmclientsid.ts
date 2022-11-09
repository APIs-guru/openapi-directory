import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmClientsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmClientsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmClientsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ClientRepresentation;
}


export class PutRealmClientsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
