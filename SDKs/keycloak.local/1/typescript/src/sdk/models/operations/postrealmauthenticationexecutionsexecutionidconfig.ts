import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmAuthenticationExecutionsExecutionIdConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmAuthenticationExecutionsExecutionIdConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmAuthenticationExecutionsExecutionIdConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AuthenticatorConfigRepresentation;
}


export class PostRealmAuthenticationExecutionsExecutionIdConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
