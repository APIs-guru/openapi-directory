import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRealmDefaultOptionalClientScopesClientScopeIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientScopeId" })
  clientScopeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmDefaultOptionalClientScopesClientScopeIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmDefaultOptionalClientScopesClientScopeIdPathParams;
}


export class PutRealmDefaultOptionalClientScopesClientScopeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
