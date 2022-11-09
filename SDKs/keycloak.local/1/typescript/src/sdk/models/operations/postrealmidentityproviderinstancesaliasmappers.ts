import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmIdentityProviderInstancesAliasMappersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmIdentityProviderInstancesAliasMappersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmIdentityProviderInstancesAliasMappersPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.IdentityProviderMapperRepresentation;
}


export class PostRealmIdentityProviderInstancesAliasMappersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
