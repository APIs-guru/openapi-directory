import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmClientScopesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientScopesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmClientScopesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ClientScopeRepresentation;
}


export class PostRealmClientScopesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
