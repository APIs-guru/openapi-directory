import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRealmAuthenticationRequiredActionsAliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmAuthenticationRequiredActionsAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRealmAuthenticationRequiredActionsAliasPathParams;
}


export class DeleteRealmAuthenticationRequiredActionsAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
