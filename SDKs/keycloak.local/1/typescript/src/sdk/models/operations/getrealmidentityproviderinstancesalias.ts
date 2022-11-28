import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmIdentityProviderInstancesAliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmIdentityProviderInstancesAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmIdentityProviderInstancesAliasPathParams;
}


export class GetRealmIdentityProviderInstancesAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  identityProviderRepresentation?: shared.IdentityProviderRepresentation;

  @SpeakeasyMetadata()
  statusCode: number;
}
