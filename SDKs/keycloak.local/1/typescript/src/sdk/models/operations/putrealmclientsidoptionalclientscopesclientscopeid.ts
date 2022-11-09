import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutRealmClientsIdOptionalClientScopesClientScopeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientScopeId" })
  clientScopeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmClientsIdOptionalClientScopesClientScopeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmClientsIdOptionalClientScopesClientScopeIdPathParams;
}


export class PutRealmClientsIdOptionalClientScopesClientScopeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
