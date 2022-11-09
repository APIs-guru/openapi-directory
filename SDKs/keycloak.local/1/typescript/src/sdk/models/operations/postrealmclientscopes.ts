import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmClientScopesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientScopesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmClientScopesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ClientScopeRepresentation;
}


export class PostRealmClientScopesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
