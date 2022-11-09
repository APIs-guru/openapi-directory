import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmAuthenticationRequiredActionsAliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmAuthenticationRequiredActionsAliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmAuthenticationRequiredActionsAliasPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RequiredActionProviderRepresentation;
}


export class PutRealmAuthenticationRequiredActionsAliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
