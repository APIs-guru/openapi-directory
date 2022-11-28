import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRealmClientsIdDefaultClientScopesClientScopeIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientScopeId" })
  clientScopeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmClientsIdDefaultClientScopesClientScopeIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmClientsIdDefaultClientScopesClientScopeIdPathParams;
}


export class PutRealmClientsIdDefaultClientScopesClientScopeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
