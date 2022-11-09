import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientScopesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientScopesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientScopesIdPathParams;
}


export class GetRealmClientScopesIdResponse extends SpeakeasyBase {
  @Metadata()
  clientScopeRepresentation?: shared.ClientScopeRepresentation;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
