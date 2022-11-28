import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRealmIdentityProviderInstancesAliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmIdentityProviderInstancesAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRealmIdentityProviderInstancesAliasPathParams;
}


export class DeleteRealmIdentityProviderInstancesAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
