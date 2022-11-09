import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmAuthenticationRequiredActionsAliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmAuthenticationRequiredActionsAliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmAuthenticationRequiredActionsAliasPathParams;
}


export class DeleteRealmAuthenticationRequiredActionsAliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
