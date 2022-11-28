import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRealmDefaultDefaultClientScopesClientScopeIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientScopeId" })
  clientScopeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmDefaultDefaultClientScopesClientScopeIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmDefaultDefaultClientScopesClientScopeIdPathParams;
}


export class PutRealmDefaultDefaultClientScopesClientScopeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
