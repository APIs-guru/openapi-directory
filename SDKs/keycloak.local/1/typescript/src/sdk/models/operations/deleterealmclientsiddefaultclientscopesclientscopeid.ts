import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmClientsIdDefaultClientScopesClientScopeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientScopeId" })
  clientScopeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmClientsIdDefaultClientScopesClientScopeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmClientsIdDefaultClientScopesClientScopeIdPathParams;
}


export class DeleteRealmClientsIdDefaultClientScopesClientScopeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
