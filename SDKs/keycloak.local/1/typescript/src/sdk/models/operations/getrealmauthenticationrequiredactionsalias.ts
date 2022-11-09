import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmAuthenticationRequiredActionsAliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAuthenticationRequiredActionsAliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmAuthenticationRequiredActionsAliasPathParams;
}


export class GetRealmAuthenticationRequiredActionsAliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  requiredActionProviderRepresentation?: shared.RequiredActionProviderRepresentation;

  @Metadata()
  statusCode: number;
}
