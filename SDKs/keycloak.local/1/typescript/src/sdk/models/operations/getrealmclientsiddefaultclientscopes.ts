import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsIdDefaultClientScopesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdDefaultClientScopesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdDefaultClientScopesPathParams;
}


export class GetRealmClientsIdDefaultClientScopesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ClientScopeRepresentation })
  clientScopeRepresentations?: shared.ClientScopeRepresentation[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
