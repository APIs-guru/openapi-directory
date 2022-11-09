import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmAuthenticationFlowsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmAuthenticationFlowsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmAuthenticationFlowsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AuthenticationFlowRepresentation;
}


export class PostRealmAuthenticationFlowsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
