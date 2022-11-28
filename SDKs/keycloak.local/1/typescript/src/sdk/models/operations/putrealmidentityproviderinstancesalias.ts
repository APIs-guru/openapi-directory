import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRealmIdentityProviderInstancesAliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmIdentityProviderInstancesAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmIdentityProviderInstancesAliasPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.IdentityProviderRepresentation;
}


export class PutRealmIdentityProviderInstancesAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
