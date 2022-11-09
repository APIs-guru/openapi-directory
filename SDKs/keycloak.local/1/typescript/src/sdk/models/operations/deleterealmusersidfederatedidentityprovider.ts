import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmUsersIdFederatedIdentityProviderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmUsersIdFederatedIdentityProviderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmUsersIdFederatedIdentityProviderPathParams;
}


export class DeleteRealmUsersIdFederatedIdentityProviderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
