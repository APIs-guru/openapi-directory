import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRealmClientsIdOptionalClientScopesClientScopeIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientScopeId" })
  clientScopeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmClientsIdOptionalClientScopesClientScopeIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRealmClientsIdOptionalClientScopesClientScopeIdPathParams;
}


export class DeleteRealmClientsIdOptionalClientScopesClientScopeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
