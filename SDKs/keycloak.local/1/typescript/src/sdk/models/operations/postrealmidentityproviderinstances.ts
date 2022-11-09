import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmIdentityProviderInstancesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmIdentityProviderInstancesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmIdentityProviderInstancesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.IdentityProviderRepresentation;
}


export class PostRealmIdentityProviderInstancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
