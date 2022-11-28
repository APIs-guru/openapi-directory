import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmUsersIdFederatedIdentityProviderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUsersIdFederatedIdentityProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmUsersIdFederatedIdentityProviderPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FederatedIdentityRepresentation;
}


export class PostRealmUsersIdFederatedIdentityProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
