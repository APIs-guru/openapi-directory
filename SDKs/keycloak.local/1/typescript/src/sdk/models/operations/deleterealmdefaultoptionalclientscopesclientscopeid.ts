import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmDefaultOptionalClientScopesClientScopeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientScopeId" })
  clientScopeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmDefaultOptionalClientScopesClientScopeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmDefaultOptionalClientScopesClientScopeIdPathParams;
}


export class DeleteRealmDefaultOptionalClientScopesClientScopeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
