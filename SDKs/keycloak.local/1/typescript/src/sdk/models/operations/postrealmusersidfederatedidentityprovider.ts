import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmUsersIdFederatedIdentityProviderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUsersIdFederatedIdentityProviderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmUsersIdFederatedIdentityProviderPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.FederatedIdentityRepresentation;
}


export class PostRealmUsersIdFederatedIdentityProviderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
