import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmAuthenticationExecutionsExecutionIdRaisePriorityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmAuthenticationExecutionsExecutionIdRaisePriorityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmAuthenticationExecutionsExecutionIdRaisePriorityPathParams;
}


export class PostRealmAuthenticationExecutionsExecutionIdRaisePriorityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
