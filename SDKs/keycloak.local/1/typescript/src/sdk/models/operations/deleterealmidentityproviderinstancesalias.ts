import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmIdentityProviderInstancesAliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmIdentityProviderInstancesAliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmIdentityProviderInstancesAliasPathParams;
}


export class DeleteRealmIdentityProviderInstancesAliasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
