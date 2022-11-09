import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutRealmDefaultDefaultClientScopesClientScopeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientScopeId" })
  clientScopeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmDefaultDefaultClientScopesClientScopeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmDefaultDefaultClientScopesClientScopeIdPathParams;
}


export class PutRealmDefaultDefaultClientScopesClientScopeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
