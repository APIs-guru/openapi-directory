import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmClientScopesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmClientScopesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmClientScopesIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ClientScopeRepresentation;
}


export class PutRealmClientScopesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
