import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdPathParams;
}


export class GetRealmClientsIdResponse extends SpeakeasyBase {
  @Metadata()
  clientRepresentation?: shared.ClientRepresentation;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
