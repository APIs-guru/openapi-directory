import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmIdentityProviderInstancesAliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmIdentityProviderInstancesAliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmIdentityProviderInstancesAliasPathParams;
}


export class GetRealmIdentityProviderInstancesAliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  identityProviderRepresentation?: shared.IdentityProviderRepresentation;

  @Metadata()
  statusCode: number;
}
