import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsIdOptionalClientScopesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdOptionalClientScopesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdOptionalClientScopesPathParams;
}


export class GetRealmClientsIdOptionalClientScopesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ClientScopeRepresentation })
  clientScopeRepresentations?: shared.ClientScopeRepresentation[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
