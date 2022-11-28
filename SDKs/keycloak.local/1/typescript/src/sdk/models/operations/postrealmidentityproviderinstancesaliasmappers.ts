import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmIdentityProviderInstancesAliasMappersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmIdentityProviderInstancesAliasMappersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmIdentityProviderInstancesAliasMappersPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.IdentityProviderMapperRepresentation;
}


export class PostRealmIdentityProviderInstancesAliasMappersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
