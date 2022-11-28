import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRealmAuthenticationRequiredActionsAliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmAuthenticationRequiredActionsAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmAuthenticationRequiredActionsAliasPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RequiredActionProviderRepresentation;
}


export class PutRealmAuthenticationRequiredActionsAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
