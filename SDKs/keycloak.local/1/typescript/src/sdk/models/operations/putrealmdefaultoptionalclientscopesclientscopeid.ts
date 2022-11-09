import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutRealmDefaultOptionalClientScopesClientScopeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientScopeId" })
  clientScopeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmDefaultOptionalClientScopesClientScopeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmDefaultOptionalClientScopesClientScopeIdPathParams;
}


export class PutRealmDefaultOptionalClientScopesClientScopeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
