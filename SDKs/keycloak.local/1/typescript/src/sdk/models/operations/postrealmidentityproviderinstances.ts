import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmIdentityProviderInstancesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmIdentityProviderInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmIdentityProviderInstancesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.IdentityProviderRepresentation;
}


export class PostRealmIdentityProviderInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
