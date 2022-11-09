import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmAuthenticationExecutionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmAuthenticationExecutionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmAuthenticationExecutionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AuthenticationExecutionRepresentation;
}


export class PostRealmAuthenticationExecutionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
