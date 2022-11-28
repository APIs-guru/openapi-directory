import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRealmUsersIdFederatedIdentityProviderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmUsersIdFederatedIdentityProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRealmUsersIdFederatedIdentityProviderPathParams;
}


export class DeleteRealmUsersIdFederatedIdentityProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
