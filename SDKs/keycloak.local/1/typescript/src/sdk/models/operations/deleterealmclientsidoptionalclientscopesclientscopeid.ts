import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmClientsIdOptionalClientScopesClientScopeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientScopeId" })
  clientScopeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmClientsIdOptionalClientScopesClientScopeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmClientsIdOptionalClientScopesClientScopeIdPathParams;
}


export class DeleteRealmClientsIdOptionalClientScopesClientScopeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
