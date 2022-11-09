import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutRealmClientsIdDefaultClientScopesClientScopeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientScopeId" })
  clientScopeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmClientsIdDefaultClientScopesClientScopeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmClientsIdDefaultClientScopesClientScopeIdPathParams;
}


export class PutRealmClientsIdDefaultClientScopesClientScopeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
